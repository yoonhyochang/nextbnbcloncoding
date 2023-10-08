import { readFileSync, writeFileSync } from "fs";
import { StoredUserType } from "../../types/user";

//* 유저 리스트 데이터 불러오기
const getList = () => {
  // 파일을 동기적으로 읽어옵니다. 이 때,
  //readFileSync 함수를 사용하므로 파일을 읽을 때까지 프로그램이 블록됩니다.
  const usersBuffer = readFileSync("data/users.json");
  const usersString = usersBuffer.toString();
  if (!usersString) {
    return [];
  }
  //읽어온 문자열을 JSON 형식으로 파싱합니다. 이를 통해 파일에 저장된 사용자 정보를 JavaScript 객체로 변환합니다
  // 이 코드에서는 StoredUserType 형식의 배열로 파싱하고 있습니다.
  const users: StoredUserType[] = JSON.parse(usersString);
  //: 파싱한 사용자 정보를 반환합니다. 이 정보는 함수를 호출한 곳에서 사용할 수 있습니다.
  return users;
};

//* email의 유저가 있는지 확인하기
//: 이 함수는 객체 형태의 인자를 받습니다. 이 객체는 email이라는 문자열 속성을 가지며, 이 속성은 이메일 주소를 나타냅니다.
const exist = ({ email }: { email: string }) => {
  const users = getList();
  //users 배열의 각 요소를 순회하면서, 각 사용자 객체의 email 속성과 입력된 email 값이 일치하는지 확인합니다
  return users.some((user) => user.email === email);
};

//* 유저 리스트 저장하기
const write = async (users: StoredUserType[]) => {
  // 데이터를 저장할 파일의 경로를 나타냅니다. 여기서는 상대 경로를 사용하여 현재 작업 디렉토리 내의 "data/users.json" 파일에 데이터를 저장합니다.
  writeFileSync("data/users.json", JSON.stringify(users));
};

export default { getList, exist, write };
