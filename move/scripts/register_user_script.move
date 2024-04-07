script {
    use UserRegistration::UserRegistration;

    fun main(account: signer, email: vector<u8>) {
        UserRegistration::register_user(&account, email);
    }
}