{function form() {
    if (true) {
      // show thankyou message
      return <h2>Thank you</h2>;
    } else {
      //show form
      return (
        <form
          action={action}
          id="gForm"
          name="gForm"
          target="hidden_iframe"
          onsubmit="submitted=true;"
        >
          <label htmlFor={name}>Name</label>
          <input type="text" name={name} id={name} />

          <label htmlFor={email}>Email</label>
          <input type="text" name={email} />

          <label htmlFor={subject}>Subject</label>
          <input type="text" name={subject} id={subject} />

          <label htmlFor={message}>Message</label>
          <textarea type="text" name={message} id={message} />

          <input
            type="submit"
            value="submit"
            onClick={this.handleFormSubmit.bind(this)}
          />
        </form>
      );
    }
  }}
