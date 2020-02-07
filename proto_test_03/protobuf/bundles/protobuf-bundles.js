var $protobuf = window.protobuf;
$protobuf.roots.default=window;
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.test = (function() {

    /**
     * Namespace test.
     * @exports test
     * @namespace
     */
    var test = {};

    test.user_login = (function() {

        /**
         * Properties of a user_login.
         * @memberof test
         * @interface Iuser_login
         * @property {number} userId user_login userId
         * @property {string} userName user_login userName
         */

        /**
         * Constructs a new user_login.
         * @memberof test
         * @classdesc Represents a user_login.
         * @implements Iuser_login
         * @constructor
         * @param {test.Iuser_login=} [properties] Properties to set
         */
        function user_login(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * user_login userId.
         * @member {number} userId
         * @memberof test.user_login
         * @instance
         */
        user_login.prototype.userId = 0;

        /**
         * user_login userName.
         * @member {string} userName
         * @memberof test.user_login
         * @instance
         */
        user_login.prototype.userName = "";

        /**
         * Creates a new user_login instance using the specified properties.
         * @function create
         * @memberof test.user_login
         * @static
         * @param {test.Iuser_login=} [properties] Properties to set
         * @returns {test.user_login} user_login instance
         */
        user_login.create = function create(properties) {
            return new user_login(properties);
        };

        /**
         * Encodes the specified user_login message. Does not implicitly {@link test.user_login.verify|verify} messages.
         * @function encode
         * @memberof test.user_login
         * @static
         * @param {test.Iuser_login} message user_login message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        user_login.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.userName);
            return writer;
        };

        /**
         * Encodes the specified user_login message, length delimited. Does not implicitly {@link test.user_login.verify|verify} messages.
         * @function encodeDelimited
         * @memberof test.user_login
         * @static
         * @param {test.Iuser_login} message user_login message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        user_login.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a user_login message from the specified reader or buffer.
         * @function decode
         * @memberof test.user_login
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {test.user_login} user_login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        user_login.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.test.user_login();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int32();
                    break;
                case 2:
                    message.userName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            if (!message.hasOwnProperty("userName"))
                throw $util.ProtocolError("missing required 'userName'", { instance: message });
            return message;
        };

        /**
         * Decodes a user_login message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof test.user_login
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {test.user_login} user_login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        user_login.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a user_login message.
         * @function verify
         * @memberof test.user_login
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        user_login.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.userId))
                return "userId: integer expected";
            if (!$util.isString(message.userName))
                return "userName: string expected";
            return null;
        };

        return user_login;
    })();

    return test;
})();