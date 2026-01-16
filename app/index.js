function handleJoin(){

    const userId = document.querySelector("input[name=userId]").value;
    const userPw = document.querySelector("input[name=userPw]").value;
    const userPw2 = document.querySelector("input[name=userPw2]").value;
    const userNick = document.querySelector("input[name=userNick]").value;
    
    
    //id(영어소문자 & 숫자, 4-8글자)
    const idOk = /^[a-z0-9]{4,8}$/.test(userId);
    if(!idOk){
        alert("아이디 확인 바람");
        return false;
    }
    
    //pw(숫자, 4-8글자)
    const pwOk1 = /^[0-9]{4,8}$/.test(userPw);
    const pwOk2 = userPw === userPw2;
    const pwOk = pwOk1 && pwOk2;
    if(!pwOk){
        alert("비밀번호 확인 바람");
        return false;
    }
    
    //nick(한글, 2-4글자)
    const nickOk = /^[가-힣]{2,4}$/.test(userNick);
    if(!nickOk){
        alert("닉네임 확인 바람");
        return false;
    }
}