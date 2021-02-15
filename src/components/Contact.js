import Button from './Button'
const Contact = () => {
  return (
    <div className='contact'>
      <p className='abt-name' align='center'>Contact Me</p>
      <p className='abt-text' align='center'>Let's chit chat.</p>

      <form>
        <div className='add-form'>
          <div className='form-control' req>
            <label>Name*</label>
            <input type = 'text'/>
          </div>

          <div className='form-control' req>
            <label>Email*</label>
            <input type = 'text'/>
          </div>

          <div className='form-control'>
            <label>Message</label>
            <input type = 'text'/>
          </div>

          <Button text='Submit' align='center'/>
        </div>
      </form>
    </div>
  )
}

export default Contact
