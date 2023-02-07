import PropTypes from 'prop-types';

import styles from './contact-list.module.css';

const ContactList = ({items, removeBook}) => {
    const contacts = items.map(({ name, number, id }) => (
        <li key={id} className={styles.item}>
          {name}: {number}
          <button
            className={styles.buttonRemove}
            onClick={() => removeBook(id)}
            type="button"
          >
            Delete
          </button>
        </li>

      ))

      return (
        <ol className={styles.contactList}>
            {contacts}
        </ol>
      )
}

export default ContactList;

ContactList.defaultProps = {
    items: []
  }

  ContactList.propTypes = {
    removeBook: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.string,
        number: PropTypes.string.isRequired
    }
    ))
  }