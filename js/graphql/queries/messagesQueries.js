import gql from 'graphql-tag'

export const START_CONVERSATION = gql`
	mutation startConversation($recipientId: ID!) {
		startConversation(recipientId: $recipientId) {
			id
			familyId
			caregiverId
		}
	}
`

export const GET_CONVERSATIONS = gql`
	query getConversations {
		getConversations {
			id
			familyId
			caregiverId
			recipient {
				userId
				avatar
				firstName
				lastName
			}
		}
	}
`

export const ADD_MESSAGE = gql`
	mutation addMessage($input: AddMessageInput!) {
		addMessage(input: $input) {
			content
			dateCreated
		}
	}
`

export const GET_MESSAGES = gql`
	query getMessages($input: CursorMessageInput!) {
		getMessages(input: $input) {
			id
			content
			dateCreated
			authorId
		}
	}
`

export const MESSAGE_SUBSCRIPTION = gql`
	subscription messageAdded($input: CursorMessageInput!) {
		messageAdded(input: $input) {
			id
			content
			dateCreated
			authorId
		}
	}
`

export const CONVERSATION_SUBSCRIPTION = gql`
	subscription conversationAdded($userId: ID!) {
		conversationAdded(userId: $userId) {
			id
			familyId
			caregiverId
			family {
				userId
				avatar
				firstName
				lastName
			}
			caregiver {
				userId
				avatar
				firstName
				lastName
			}
		}
	}
`