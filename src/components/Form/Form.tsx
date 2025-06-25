import FormValue from '../FormValues/FormValue';
import JsonFormater from '../JSON/JsonFormater';
import './Form.scss';

const Form = () => {
  return (
    <div className="form_page">
        <JsonFormater />
        <FormValue />
    </div>
  )
}

export default Form
