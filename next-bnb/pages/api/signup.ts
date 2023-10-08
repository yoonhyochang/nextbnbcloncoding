import { NextApiRequest, NextApiResponse } from "next";

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
  }
  res.statusCode = 405;

  return res.end();
};

//남은 건 3.email 중복확인, 4.패스워드 암호화, 5. 유저 정보를 추가, 6.추가된 유저의 정보와 token을 전달합니다.
