import { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import FormRender from '../FormRender';
import ParagraphRender from '../ParagraphRender';

class SwitchRender extends Component {
  constructor(prop) {
    super(prop);

    this.state = {
      displayForm: false,
    };
    this.displayFurther = this.displayFurther.bind(this);
    this.props.onChange(this.props.id, false);
  }

  displayFurther(event) {
    const { onChange, id } = this.props;
    const result = event.target.value === 'on';
    onChange(id, result);
    this.setState({
      displayForm: result,
    });
  }

  render() {
    const {
      questions, id, title, onChange, onFinish, intro,
    } = this.props;
    const { displayForm } = this.state;
    return (
      <>
        { intro && <ParagraphRender intro={intro} style={{ marginBottom: '12px' }} />}
        <Form>
          <Form.Check
            type="switch"
            key={id}
            id={id}
            label={title}
            onChange={this.displayFurther}
          />
        </Form>
        {(displayForm && questions)
          ? (
            <>
              <hr />
              <FormRender
                questions={questions}
                onChange={onChange}
                onFinish={onFinish}
              />
            </>
          )
          : (
            <div style={{
              left: '0',
              right: '0',
              bottom: '0',
              background: 'white',
              textAlign: 'center',
            }}
            >
              <Button type="primary" onClick={onFinish}>
                Next
              </Button>
            </div>
          )}
      </>
    );
  }
}

export default SwitchRender;
