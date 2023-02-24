import PropTypes from 'prop-types';

import styles from './contact-item.module.css';

const ContactItem = ({items, removeBook}) => {
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
        </li>)
        )

        return contacts;

    }

export default ContactItem;

ContactItem.defaultProps = {
    items: []
  }

  ContactItem.propTypes = {
    removeBook: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.string,
        number: PropTypes.string.isRequired
    }
    ))
  }