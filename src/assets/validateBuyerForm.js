const validate = (name, email, phone) => {
  const cond1 =
    email.search(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/) !== -1;
  const cond2 =
    name.search(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/) !== -1;
  const cond3 = phone.search(/^\s*-?[0-9]{8,10}\s*$/) !== -1;
  if (cond1 && cond2 && cond3) {
    return true;
  } else {
    return false;
  }
};

export default validate;
