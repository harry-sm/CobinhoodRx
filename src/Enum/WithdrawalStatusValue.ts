export enum WithdrawalStatusValue {
	TxPendingTwoFactorAuth = 'tx_pending_two_factor_auth',
	TxPendingEmailAuth = 'tx_pending_email_auth',
	TxPendingApproval = 'tx_pending_approval',
	TxApproved = 'tx_approved',
	TxProcessing = 'tx_processing',
	TxSent = 'tx_sent',
	TxPending = 'tx_pending',
	TxConfirmed = 'tx_confirmed',
	TxTimeout = 'tx_timeout',
	TxInvalid = 'tx_invalid',
	TxCancelled = 'tx_cancelled',
	TxRejected = 'tx_rejected'
}
