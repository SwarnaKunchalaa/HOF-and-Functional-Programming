function validateURL(url) {
    const urlPattern = /^(https?:\/\/)?([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i;
    return urlPattern.test(url);
  }
 
  console.log(validateURL("https://www.pwskills.com")); 
  console.log(validateURL("http://w3schools.co.uk#")); 
  console.log(validateURL("www.github.com")); 
  console.log(validateURL("https://example.com/path/file.html"));