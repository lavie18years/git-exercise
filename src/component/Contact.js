import React from 'react'
import { Container } from 'react-materialize'
import { TextInput } from 'react-materialize'
import { Textarea } from 'react-materialize'
import { Button } from 'react-materialize'
import { Select } from 'react-materialize'
import { Icon } from 'react-materialize'
export default function contact() {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <Container className='contact'>
            <h3 className='contact_head'>Contact us</h3>
            <form onSubmit={handleSubmit}>
                <TextInput id="TextInput-38" label="Your Name" />
                <TextInput id="Text Input-39" label="Your Phone" />
                <TextInput email id="TextInput-41" label="Email" validate />
                <Select id="Select-46" multiple={false} onChange={function noRefCheck() { }} value="">
                    <option disabled value="">
                        Choose your favourite nation
                    </option>
                    <option value="1">
                        England
                    </option>
                    <option value="2">
                        France
                    </option>
                    <option value="3">
                        Spain
                    </option>
                </Select>
                <Textarea icon={<Icon></Icon>} id="Textarea-28" label="Your content" />
                <div className='contact_but'>
                <Button>Submit</Button>
                </div>
            </form>
        </Container>
    )
}