var uri = {};
uri["USER_LOGIN"] = "/p2p-auth-api/v1/p2p-payment/services/zelle/login";

uri["GET_USER_EMAILS"] = "/p2p-email-api/v1/p2p-payment/services/zelle/email-contact-points";
uri["SEND_OTP_EMAIL"] = "/p2p-email-api/v1/p2p-payment/services/zelle/email-contact-points/{emailToken}/send-one-time-passcode";
uri["VALIDATE_OTP_EMAIL"] = "/p2p-email-api/v1/p2p-payment/services/zelle/email-contact-points/{emailToken}/verify-one-time-passcode";
uri["DELETE_USER_EMAIL"] = "/p2p-email-api/v1/p2p-payment/services/zelle/email-contact-points/{emailToken}";
uri["CREATE_USER_EMAIL"] = "/p2p-email-api/v1/p2p-payment/services/zelle/email-contact-points";
uri["SET_AUTO_DEP_ACCT_EMAIL"] = "/p2p-email-api/v1/p2p-payment/services/zelle/email-contact-points/{emailToken}/auto-deposit-account";

uri["GET_USER_ACCOUNTS"] = "/p2p-accounts-api/v1/p2p-payment/services/zelle/accounts";
uri["SET_AUTO_DEP_ACCT"] = "/p2p-accounts-api/v1/p2p-payment/services/zelle/default-auto-deposit-account";

uri["GET_CONTACTS"] = "/p2p-contacts-api/v1/p2p-payment/services/zelle/contacts";
uri["UPDATE_CONTACT"] = "/p2p-contacts-api/v1/p2p-payment/services/zelle/contacts/{contactId}";
