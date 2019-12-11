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
	mutation addMessage {
		addMessage(input: {
			conversationId: 2
			content: "wazzup"
		}) {
			content
			dateCreated
		}
	}
`

export const GET_MESSAGES = gql`
	query getMessages($conversationId: ID) {
		getMessages(conversationId: $conversationId) {
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
