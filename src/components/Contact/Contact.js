import Button from '../General/Button'
import TextareaAutosize from 'react-textarea-autosize';

const Contact = () => {
  return (
    <div className='contact'>
      <p className='abt-name' align='center'>Contact Me</p>
      <p className='abt-text' align='center'>Let's chit chat.</p>

      <form>
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

          <Button text='Submit' align='center' link='#contact' newTab='false'/>
        </div>
      </form>
    </div>
  )
}

export default Contact
