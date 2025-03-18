const contactForm = document.getElementById('contactForm');
const submittedList = document.getElementById('submittedList');

function createSubmittedItem(name, email, phone, subject, message) {
  const li = document.createElement('li');
  
  const nameElem = document.createElement('p');
  nameElem.textContent = `ชื่อ: ${name}`;
  
  const emailElem = document.createElement('p');
  emailElem.textContent = `อีเมล: ${email}`;
  
  const phoneElem = document.createElement('p');
  phoneElem.textContent = `เบอร์โทรศัพท์: ${phone}`;
  
  const subjectElem = document.createElement('p');
  subjectElem.textContent = `หัวข้อ: ${subject}`;
  
  const messageElem = document.createElement('p');
  messageElem.textContent = `ข้อความ: ${message}`;
  
  li.appendChild(nameElem);
  li.appendChild(emailElem);
  li.appendChild(phoneElem);
  li.appendChild(subjectElem);
  li.appendChild(messageElem);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'ลบ';
  deleteButton.classList.add('delete-btn');
  
  deleteButton.onclick = function() {
    const confirmDelete = confirm('คุณแน่ใจหรือไม่ว่าต้องการลบข้อมูลนี้?');
    if (confirmDelete) {
      submittedList.removeChild(li);
    }
  };
  
  li.appendChild(deleteButton);

  li.onclick = function() {
    li.classList.toggle('completed');
  };
  
  submittedList.appendChild(li);
}

contactForm.addEventListener('submit', function(event) {
  event.preventDefault(); 
  
  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const phone = contactForm.phone.value.trim();
  const subject = contactForm.subject.value.trim();
  const message = contactForm.message.value.trim();

  if (!name || !email || !phone || !message) {
    alert('กรุณากรอกข้อมูลให้ครบถ้วน');
    return;
  }

  createSubmittedItem(name, email, phone, subject, message);
  
  contactForm.reset();
});
