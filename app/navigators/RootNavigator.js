import { StackNavigator } from 'react-navigation';

import { ContactsList, ContactsCreate, ContactsDetail } from '../contacts/screens'

const RootNavigator = StackNavigator({
  ContactsList: {
    screen: ContactsList,
    navigationOptions: {
      title: 'Contacts List'
    }
  },
  ContactsCreate: {
    screen: ContactsCreate,
    navigationOptions: {
      title: 'Create Contact'
    }
  },
  ContactsDetail: {
    screen: ContactsDetail,
    navigationOptions: {
      title: 'Detail Contact'
    }
  }
})

export default RootNavigator
