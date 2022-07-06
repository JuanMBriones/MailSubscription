import axios from 'axios';

const registerUser = (userMail, setShowAlertDuplicated) => {
  axios.post(`${process.env.NEXT_PUBLIC_API_URL}/register/`, userMail)
      .then((res) => {
        if (res.status === 201 && setShowAlertDuplicated) {
          setShowAlertDuplicated(false);
        }
      })
      .catch((err) => {
        if (err.response.status === 400 && setShowAlertDuplicated) {
          setShowAlertDuplicated(true);
        }
      },
      );
};

module.exports = {
  registerUser,
};
