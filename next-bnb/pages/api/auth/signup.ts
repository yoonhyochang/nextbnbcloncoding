import { NextApiRequest, NextApiResponse } from "next";
import Data from "../../../lib/data";
import bcrypt from "bcryptjs";
import { StoredUserType } from "../../../types/user";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  //* api 순서도
  //1.api methof post 인지확인
  if (req.method === "POST") {
    //2.req.body 에 필요한 값이 전부 들어 있는지 확인
    const { email, firstname, lastname, password, birthday } = req.body;
    if (!email || !firstname || !lastname || !password || !birthday) {
      res.statusCode = 400;
      return res.send("필수 데이터가 없습니다.");
    }
    // return res.send("필수 데이터가 없습니다.");

    //3.email 중복확인
    const userExist = Data.user.exist({ email });
    if (userExist) {
      res.statusCode = 409;
      res.send("이미 가입된 이메일 입니다.");
    }

    // 4.패스워드 암호화
    const hashedPassword = bcrypt.hashSync(password, 8);

    // 5. 유저 정보를 추가
    const users = Data.user.getList();
    let userId;
    if (users.length === 0) {
      userId = 1;
    } else {
      userId = users[users.length - 1].id + 1;
    }
    const newUser: StoredUserType = {
      id: userId,
      email,
      firstname,
      lastname,
      password: hashedPassword,
      birthday,
      profileImage: "/static/image/user/default_user_profile_image.jpg"
    };

    Data.user.write([...users, newUser]);

    res.statusCode = 405;

    return res.end();
  }
};

//남은 건 , 6.추가된 유저의 정보와 token을 전달합니다.
