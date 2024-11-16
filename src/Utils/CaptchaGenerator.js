export const generateCaptcha = () => {
    const charsArray = "0abc1def2ghi3jkl4mn5op6qr7stuvwx8yzABCD9EFGHIJKLMNOPQRSTUVWXYZ";    
    let captcha = "";
    for (let i = 0; i < 3; i++) {
      const index = Math.floor(Math.random() * charsArray.length);
      captcha += charsArray[index];
    }
    return captcha;
  };
  