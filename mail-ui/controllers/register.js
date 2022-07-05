import axios from 'axios';

const registerUser = (userMail, setShowAlertDuplicated) => {
  axios.post(`${process.env.NEXT_PUBLIC_API_URL}/register/`, userMail)
    .then(res => {
      console.log(res);

      if (setShowAlertDuplicated) {
        setShowAlertDuplicated(false);
      }
    })
    .catch(err => {
      console.log(err);
      if (setShowAlertDuplicated) {
        setShowAlertDuplicated(true);
      }
    }
  );

};

module.exports = {
  registerUser
};
