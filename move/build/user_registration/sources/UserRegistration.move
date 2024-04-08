address UserRegistration {
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
