type Long = protobuf.Long;

/** Namespace test. */
declare namespace test {

    /** Properties of a user_login. */
    interface Iuser_login {

        /** user_login userId */
        userId: number;

        /** user_login userName */
        userName: string;
    }

    /** Represents a user_login. */
    class user_login implements Iuser_login {

        /**
         * Constructs a new user_login.
         * @param [properties] Properties to set
         */
        constructor(properties?: test.Iuser_login);

        /** user_login userId. */
        public userId: number;

        /** user_login userName. */
        public userName: string;

        /**
         * Creates a new user_login instance using the specified properties.
         * @param [properties] Properties to set
         * @returns user_login instance
         */
        public static create(properties?: test.Iuser_login): test.user_login;

        /**
         * Encodes the specified user_login message. Does not implicitly {@link test.user_login.verify|verify} messages.
         * @param message user_login message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: test.Iuser_login, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified user_login message, length delimited. Does not implicitly {@link test.user_login.verify|verify} messages.
         * @param message user_login message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: test.Iuser_login, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a user_login message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns user_login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): test.user_login;

        /**
         * Decodes a user_login message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns user_login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): test.user_login;

        /**
         * Verifies a user_login message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }
}
