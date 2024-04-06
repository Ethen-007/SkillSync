script {
    use 0x863b5635c27f3f85624225ee39fd13e85db0ca73644a19c8689ced1c229ae1d6::UserRegistration;

    fun main(account: signer, email: vector<u8>) {
        UserRegistration::register_user(&account, email);
    }
}
