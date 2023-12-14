import {Input, Button, Textarea} from '../../form-elements';
import './footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="touch">
        <h2>Get in touch</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe animi laborum quaerat temporibus nisi dolorem repellendus aut ex, placeat nulla.</p>
        <h5>Contact us via:</h5>
        <p>contact@writeology.com</p>
        <p>contact@writeology.com</p>
      </div>
      <form>
        <Input 
          id={'firstname'}
          type={'text'}
          className={'input'}
          name={'firstname'}
          children={'FULLNAME'}
          placeholder={'ex. John Carter'}
        />
        <Input 
          id={'email'}
          type={'email'}
          className={'input'}
          name={'email'}
          children={'EMAIL ADDRESS'}
          placeholder={'example@gmail.com'}
        />
        <Input 
          id={'phone'}
          type={'text'}
          className={'input'}
          name={'phone'}
          children={'PHONE'}
          placeholder={'(487) 504-3204'}
        />
        <Input 
          id={'subject'}
          type={'text'}
          className={'input'}
          name={'subject'}
          children={'SUBJECT'}
          placeholder={'ex. Subscriptions'}
        />
        

        <Textarea/>
        <Button/>
      </form>
    </div>
  )
}

export default Footer