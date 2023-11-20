function calculateDaysOfBirthday() {
    let name = document.getElementById('nameInput').value;
    let dob = new Date(document.getElementById('dobInput').value);
    let today = new Date();

    dob.setFullYear(today.getFullYear());
    if (dob < today) {
      dob.setFullYear(today.getFullYear() + 1);
    }

    const daysUntilBirthday = Math.ceil((dob - today) / (1000 * 60 * 60 * 24));
    document.getElementById('output').textContent = `Molo ${name}, there are ${daysUntilBirthday} days until your next birthday, Dankooo!`;
  }
  