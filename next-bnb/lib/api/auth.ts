import axios from "axios";
import { UserType } from "../../types/user";

//* 회원가입 body
interface SingUpAPIBody {
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  birthday: string;
}

//* 회원 가입 api
export const signupAPI = (body: SingUpAPIBody) =>
  //서버의 API 엔드포인트 URL을 나타냅니다. 클라이언트는 이 URL로 POST 요청을 보내 회원가입 데이터를 서버에 전송합니다. 이 URL은 서버 측에서 회원가입을 처리하는 라우터나 컨트롤러에 매핑됩니다.
  axios.post<UserType>("/api/auth/signup", body);
