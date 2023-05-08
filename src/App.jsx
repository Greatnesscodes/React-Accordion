import React from 'react';
import Accordion from './Accordion';

const App = () => {
  return (
    <header className='container'>
      <h2 className='faq'>FAQ</h2>
      <div> 
      <Accordion
        title=" What are the school's operating hours?"
        content="Our school operates from Monday to Friday, from 8:00 AM to 3:00 PM. " />
      <Accordion
        title="Our school operates from Monday to Friday, from 8:00 AM to 3:00 PM"
        content="To apply for admission, please visit our school's website and complete the online application form. Alternatively, you can contact the school's admission office for assistance." />
      <Accordion
        title="What is the student-to-teacher ratio at the school?"
        content="We strive to maintain small class sizes to ensure personalized attention. The student-to-teacher ratio varies across grade levels, but on average, it is approximately 15:1." />
      <Accordion
        title="Is transportation provided for students?"
        content="Yes, we provide transportation services for students who live within a specific radius of the school. Please contact the school's transportation department for more information and to check if your area is covered." />
      </div>
      
    </header>

   
  );
};

export default App;
