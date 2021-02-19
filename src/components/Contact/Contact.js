import Button from '../General/Button'
import TextareaAutosize from 'react-textarea-autosize';

const Contact = () => {
  return (
    <div className='contact'>
      <p className='abt-text' style={{paddingBottom: '3%', color: '#A8B7BC'}} >Want to talk?</p>

      <form action='mailto:kcshiffl@gmail.com' method='POST' enctype='multipart/form-data' name='EmailTestForm'>
        <div className='add-form'>

          <div className='form-control' req>
            <label>Name*</label>
            <textarea id='textInput'></textarea>
          </div>

          <div className='form-control' req>
            <label>Email*</label>
            <textarea id='textInput' > </textarea>
          </div>

          <div className='form-control'>
            <label>Message</label>
            <textarea id='textInput-adjustable' style={{ height: '200px' }}> </textarea>
          </div>

          <Button text='Submit' align='center' link='' newTab='false'/>

        </div>
      </form>
    </div>
  )
}

export default Contact
