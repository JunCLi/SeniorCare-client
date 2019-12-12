import gql from 'graphql-tag'

export const START_CONVERSATION = gql`
	mutation startConversation {
		startConversation(
			recipientId: "kc-vdu-bRbEFAdRpPihA47EZ4kL"
		) {
			id
			familyId
			caregiverId
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
	query getMessages($conversationId: ID!) {
		getMessages(conversationId: $conversationId) {
			id
			content
			dateCreated
			authorId
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

export const MESSAGE_SUBSCRIPTION = gql`
	subscription messageAdded($conversationId: ID!) {
		messageAdded(conversationId: $conversationId) {
			id
			content
			dateCreated
			authorId
		}
	}
`