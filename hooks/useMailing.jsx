const useMailing = () => {

  const sendEmail = async (emailAdress, data) => {
    fetch(`https://formsubmit.co/ajax/${emailAdress}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        name: data.name,
        phone: data.phone,
        message: data.message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      
      .catch((error) => console.log(error));
  };

  return {
    sendEmail,
  };
};

export default useMailing;
