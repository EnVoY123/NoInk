function nextField(i, n, m) {
  document.value="";
  if (i.value.length >= m) {
    console.log(i.value)
    i.value.replace(/[0-9]/g, "*")
    i.form.elements[n].focus();
  }
}

function nextPage(i){
  document.getElementById('passcode_next_btn').click()
  i.blur()
}
