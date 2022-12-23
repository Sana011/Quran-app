import React from 'react'
import "../../Components/schools/school.css";
import book from "../../images/book.png";
import tracking from "../../images/tracking.png";
import bookPencil from "../../images/bookPencil.png";
function SchoolsCom() {
  return (
    <div>
        <div className="container mt-5">
        <h1 className='mt-5 pt-5 text-center schools-head'>Maximize the value of student-teacher <br /> relationships in class</h1>
        <p className='text-center sch-para'>Tarteel's AI is used by schools to help both students and teachers make the most of Quran class.</p>
        <div class="School-cards">
        <div className="card-schol-body">
                   <h4>Mistake Detection</h4>
                   <p className='cards-des-schol'>Improve your students' Quran revision by using Tarteel's voice recognition and correction tools</p>
                <div className="cr-img">
                 <img src={book} alt="" width="200px" height="200px" className='book-img' /> 
                </div> 
              </div>
              <div className="card-schol-body">
                   <h4>Mistake Detection</h4>
                   <p className='cards-des-schol'>Improve your students' Quran revision by using Tarteel's voice recognition and correction tools</p>
                <div className="cr-img">
                 <img src={bookPencil} alt="" width="200px" height="200px" className='book-img' /> 
                </div> 
              </div>
              <div className="card-schol-body">
                   <h4>Mistake Detection</h4>
                   <p className='cards-des-schol'>Improve your students' Quran revision by using Tarteel's voice recognition and correction tools</p>
                <div className="cr-img">
                 <img src={tracking} alt="" width="200px" height="200px" className='book-img' /> 
                </div> 
              </div>
      </div> 
      <div class="School-cards">
        <div className="card-schol-body">
                   <h4>Mistake Detection</h4>
                   <p className='cards-des-schol'>Improve your students' Quran revision by using Tarteel's voice recognition and correction tools</p>
                <div className="cr-img">
                 <img src={book} alt="" width="200px" height="200px" className='book-img' /> 
                </div> 
              </div>
              <div className="card-schol-body">
                   <h4>Mistake Detection</h4>
                   <p className='cards-des-schol'>Improve your students' Quran revision by using Tarteel's voice recognition and correction tools</p>
                <div className="cr-img">
                 <img src={bookPencil} alt="" width="200px" height="200px" className='book-img' /> 
                </div> 
              </div>
              <div className="card-schol-body">
                   <h4>Mistake Detection</h4>
                   <p className='cards-des-schol'>Improve your students' Quran revision by using Tarteel's voice recognition and correction tools</p>
                <div className="cr-img">
                 <img src={tracking} alt="" width="200px" height="200px" className='book-img' /> 
                </div> 
              </div>
      </div> 
        </div>

        {/* form container */}
     <div className="container school-form">
    <h1 className='scho-form-heading'>Get started with Tarteel for Schools today.</h1>
    <form className='form-bg my-5 mx-5'>
    <div className="row mb-5">
        <div className="col-6">
        <input type="email" class="form-control p-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
       </div>   
       <div className="col-6">
        <input type="email" class="form-control p-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
       </div>  
        </div>

  <div class="form-group mb-4">
    <input type="email" class="form-control p-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <div class="form-group mb-5">
    <input type="password" class="form-control p-3" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-group mb-5">
    <input type="password" class="form-control p-3" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea class="form-control p-3" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
 
  <button type="submit" class="btns btn-primary">Submit</button>
    </form>
     </div>
    </div>
  )
}

export default SchoolsCom
