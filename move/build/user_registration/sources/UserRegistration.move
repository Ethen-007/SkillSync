address 0x863b5635c27f3f85624225ee39fd13e85db0ca73644a19c8689ced1c229ae1d6 {
module UserRegistration {
    use std::signer;

    struct UserInfo has key {
        email: vector<u8>,
    }

    public fun register_user(account: &signer, email: vector<u8>) {
        let address = signer::address_of(account);
        // Simple validation could be added here
        move_to(account, UserInfo { email });
    }

    public fun get_user_email(account: address): vector<u8> acquires UserInfo {
        borrow_global<UserInfo>(account).email
    }
}
}
