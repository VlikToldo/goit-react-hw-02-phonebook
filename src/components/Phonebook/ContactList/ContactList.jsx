import PropTypes from 'prop-types';

import styles from './contact-list.module.css';

const ContactList = ({children}) => {

      return (
        <ol className={styles.contactList}>
            {children}
        </ol>
      )
}

export default ContactList;

ContactList.propTypes ={
  children: PropTypes.element.isRequired
}


