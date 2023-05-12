import React, { useState } from 'react';
import RadioButton from './RadioButtons';
import EmailForm from './EmailForm';
import PasswordForm from './PasswordForm';
import TagsInput from './TagsInput';
import Submit from './Submit';

function Form() {
  const [Option, setOption] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [tags, setTags] = useState('');

  const handleOptionChange = (value) => {
    setOption(value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleTagsChange = (event) => {
    setTags(event.target.value);
  };

  const handleSubmit = () => {
    console.log('Selected option:', Option);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Tags:', tags);
  };

  const isSubmitDisabled = Option === null || email === '' || password === '';

  return (
    <div>
      <RadioButton
        label="project"
        value="project"
        checked={Option === 'project'}
        onChange={() => handleOptionChange('project')}
      />
      <RadioButton
        label="design"
        value="design"
        checked={Option === 'design'}
        onChange={() => handleOptionChange('design')}
      />
      <EmailForm value={email} onChange={handleEmailChange} />
      <PasswordForm value={password} onChange={handlePasswordChange} />
      <TagsInput value={tags} onChange={handleTagsChange} />
      <Submit onSubmit={handleSubmit} disabled={isSubmitDisabled} />
    </div>
    
  );
}

export default Form;