function handleStart() {
    const email = document.getElementById('email').value;
    if (email.trim() === '') {
      alert('Please enter an email!');
    } else {
      alert(`Thanks! We'll send info to ${email}`);
    }
  }
  