function nextField(i, n, m) {
  if (i.value.length >= m) {
    i.form.elements[n].focus();
  }
}
