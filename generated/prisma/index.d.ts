
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Match
 * 
 */
export type Match = $Result.DefaultSelection<Prisma.$MatchPayload>
/**
 * Model Room
 * 
 */
export type Room = $Result.DefaultSelection<Prisma.$RoomPayload>
/**
 * Model RoomParticipant
 * 
 */
export type RoomParticipant = $Result.DefaultSelection<Prisma.$RoomParticipantPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model MessageWithFreinds
 * 
 */
export type MessageWithFreinds = $Result.DefaultSelection<Prisma.$MessageWithFreindsPayload>
/**
 * Model AITranscript
 * 
 */
export type AITranscript = $Result.DefaultSelection<Prisma.$AITranscriptPayload>
/**
 * Model Subscription
 * 
 */
export type Subscription = $Result.DefaultSelection<Prisma.$SubscriptionPayload>
/**
 * Model Friendship
 * 
 */
export type Friendship = $Result.DefaultSelection<Prisma.$FriendshipPayload>
/**
 * Model Report
 * 
 */
export type Report = $Result.DefaultSelection<Prisma.$ReportPayload>
/**
 * Model History
 * 
 */
export type History = $Result.DefaultSelection<Prisma.$HistoryPayload>
/**
 * Model Contact
 * 
 */
export type Contact = $Result.DefaultSelection<Prisma.$ContactPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const MessageType: {
  TEXT: 'TEXT',
  IMAGE: 'IMAGE',
  VIDEO: 'VIDEO',
  AUDIO: 'AUDIO',
  FILE: 'FILE'
};

export type MessageType = (typeof MessageType)[keyof typeof MessageType]


export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const Interest: {
  MUSIC: 'MUSIC',
  TRAVEL: 'TRAVEL',
  SPORTS: 'SPORTS',
  READING: 'READING',
  MOVIES: 'MOVIES',
  TECHNOLOGY: 'TECHNOLOGY',
  ART: 'ART',
  DANCE: 'DANCE',
  FITNESS: 'FITNESS',
  GAMING: 'GAMING',
  PHOTOGRAPHY: 'PHOTOGRAPHY',
  WRITING: 'WRITING',
  COOKING: 'COOKING',
  FASHION: 'FASHION',
  GARDENING: 'GARDENING'
};

export type Interest = (typeof Interest)[keyof typeof Interest]


export const Language: {
  ENGLISH: 'ENGLISH',
  HINDI: 'HINDI',
  SPANISH: 'SPANISH',
  FRENCH: 'FRENCH',
  GERMAN: 'GERMAN',
  CHINESE: 'CHINESE',
  JAPANESE: 'JAPANESE',
  KOREAN: 'KOREAN',
  TAMIL: 'TAMIL',
  TELUGU: 'TELUGU',
  BENGALI: 'BENGALI',
  MARATHI: 'MARATHI',
  GUJARATI: 'GUJARATI',
  PUNJABI: 'PUNJABI',
  MALAYALAM: 'MALAYALAM'
};

export type Language = (typeof Language)[keyof typeof Language]

}

export type MessageType = $Enums.MessageType

export const MessageType: typeof $Enums.MessageType

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type Interest = $Enums.Interest

export const Interest: typeof $Enums.Interest

export type Language = $Enums.Language

export const Language: typeof $Enums.Language

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.match`: Exposes CRUD operations for the **Match** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Matches
    * const matches = await prisma.match.findMany()
    * ```
    */
  get match(): Prisma.MatchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.room`: Exposes CRUD operations for the **Room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.room.findMany()
    * ```
    */
  get room(): Prisma.RoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roomParticipant`: Exposes CRUD operations for the **RoomParticipant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoomParticipants
    * const roomParticipants = await prisma.roomParticipant.findMany()
    * ```
    */
  get roomParticipant(): Prisma.RoomParticipantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.messageWithFreinds`: Exposes CRUD operations for the **MessageWithFreinds** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MessageWithFreinds
    * const messageWithFreinds = await prisma.messageWithFreinds.findMany()
    * ```
    */
  get messageWithFreinds(): Prisma.MessageWithFreindsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aITranscript`: Exposes CRUD operations for the **AITranscript** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AITranscripts
    * const aITranscripts = await prisma.aITranscript.findMany()
    * ```
    */
  get aITranscript(): Prisma.AITranscriptDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.friendship`: Exposes CRUD operations for the **Friendship** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Friendships
    * const friendships = await prisma.friendship.findMany()
    * ```
    */
  get friendship(): Prisma.FriendshipDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.report`: Exposes CRUD operations for the **Report** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reports
    * const reports = await prisma.report.findMany()
    * ```
    */
  get report(): Prisma.ReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.history`: Exposes CRUD operations for the **History** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Histories
    * const histories = await prisma.history.findMany()
    * ```
    */
  get history(): Prisma.HistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contact`: Exposes CRUD operations for the **Contact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contacts
    * const contacts = await prisma.contact.findMany()
    * ```
    */
  get contact(): Prisma.ContactDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Match: 'Match',
    Room: 'Room',
    RoomParticipant: 'RoomParticipant',
    Message: 'Message',
    MessageWithFreinds: 'MessageWithFreinds',
    AITranscript: 'AITranscript',
    Subscription: 'Subscription',
    Friendship: 'Friendship',
    Report: 'Report',
    History: 'History',
    Contact: 'Contact'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "match" | "room" | "roomParticipant" | "message" | "messageWithFreinds" | "aITranscript" | "subscription" | "friendship" | "report" | "history" | "contact"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Match: {
        payload: Prisma.$MatchPayload<ExtArgs>
        fields: Prisma.MatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          findFirst: {
            args: Prisma.MatchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          findMany: {
            args: Prisma.MatchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          create: {
            args: Prisma.MatchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          createMany: {
            args: Prisma.MatchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          delete: {
            args: Prisma.MatchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          update: {
            args: Prisma.MatchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          deleteMany: {
            args: Prisma.MatchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MatchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          upsert: {
            args: Prisma.MatchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          aggregate: {
            args: Prisma.MatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatch>
          }
          groupBy: {
            args: Prisma.MatchGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatchGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatchCountArgs<ExtArgs>
            result: $Utils.Optional<MatchCountAggregateOutputType> | number
          }
        }
      }
      Room: {
        payload: Prisma.$RoomPayload<ExtArgs>
        fields: Prisma.RoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findFirst: {
            args: Prisma.RoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findMany: {
            args: Prisma.RoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          create: {
            args: Prisma.RoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          createMany: {
            args: Prisma.RoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          delete: {
            args: Prisma.RoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          update: {
            args: Prisma.RoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          deleteMany: {
            args: Prisma.RoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          upsert: {
            args: Prisma.RoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          aggregate: {
            args: Prisma.RoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoom>
          }
          groupBy: {
            args: Prisma.RoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomCountArgs<ExtArgs>
            result: $Utils.Optional<RoomCountAggregateOutputType> | number
          }
        }
      }
      RoomParticipant: {
        payload: Prisma.$RoomParticipantPayload<ExtArgs>
        fields: Prisma.RoomParticipantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomParticipantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomParticipantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomParticipantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomParticipantPayload>
          }
          findFirst: {
            args: Prisma.RoomParticipantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomParticipantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomParticipantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomParticipantPayload>
          }
          findMany: {
            args: Prisma.RoomParticipantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomParticipantPayload>[]
          }
          create: {
            args: Prisma.RoomParticipantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomParticipantPayload>
          }
          createMany: {
            args: Prisma.RoomParticipantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomParticipantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomParticipantPayload>[]
          }
          delete: {
            args: Prisma.RoomParticipantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomParticipantPayload>
          }
          update: {
            args: Prisma.RoomParticipantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomParticipantPayload>
          }
          deleteMany: {
            args: Prisma.RoomParticipantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomParticipantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomParticipantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomParticipantPayload>[]
          }
          upsert: {
            args: Prisma.RoomParticipantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomParticipantPayload>
          }
          aggregate: {
            args: Prisma.RoomParticipantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoomParticipant>
          }
          groupBy: {
            args: Prisma.RoomParticipantGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomParticipantGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomParticipantCountArgs<ExtArgs>
            result: $Utils.Optional<RoomParticipantCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      MessageWithFreinds: {
        payload: Prisma.$MessageWithFreindsPayload<ExtArgs>
        fields: Prisma.MessageWithFreindsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageWithFreindsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageWithFreindsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageWithFreindsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageWithFreindsPayload>
          }
          findFirst: {
            args: Prisma.MessageWithFreindsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageWithFreindsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageWithFreindsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageWithFreindsPayload>
          }
          findMany: {
            args: Prisma.MessageWithFreindsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageWithFreindsPayload>[]
          }
          create: {
            args: Prisma.MessageWithFreindsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageWithFreindsPayload>
          }
          createMany: {
            args: Prisma.MessageWithFreindsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageWithFreindsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageWithFreindsPayload>[]
          }
          delete: {
            args: Prisma.MessageWithFreindsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageWithFreindsPayload>
          }
          update: {
            args: Prisma.MessageWithFreindsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageWithFreindsPayload>
          }
          deleteMany: {
            args: Prisma.MessageWithFreindsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageWithFreindsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageWithFreindsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageWithFreindsPayload>[]
          }
          upsert: {
            args: Prisma.MessageWithFreindsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageWithFreindsPayload>
          }
          aggregate: {
            args: Prisma.MessageWithFreindsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessageWithFreinds>
          }
          groupBy: {
            args: Prisma.MessageWithFreindsGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageWithFreindsGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageWithFreindsCountArgs<ExtArgs>
            result: $Utils.Optional<MessageWithFreindsCountAggregateOutputType> | number
          }
        }
      }
      AITranscript: {
        payload: Prisma.$AITranscriptPayload<ExtArgs>
        fields: Prisma.AITranscriptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AITranscriptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AITranscriptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AITranscriptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AITranscriptPayload>
          }
          findFirst: {
            args: Prisma.AITranscriptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AITranscriptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AITranscriptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AITranscriptPayload>
          }
          findMany: {
            args: Prisma.AITranscriptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AITranscriptPayload>[]
          }
          create: {
            args: Prisma.AITranscriptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AITranscriptPayload>
          }
          createMany: {
            args: Prisma.AITranscriptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AITranscriptCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AITranscriptPayload>[]
          }
          delete: {
            args: Prisma.AITranscriptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AITranscriptPayload>
          }
          update: {
            args: Prisma.AITranscriptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AITranscriptPayload>
          }
          deleteMany: {
            args: Prisma.AITranscriptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AITranscriptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AITranscriptUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AITranscriptPayload>[]
          }
          upsert: {
            args: Prisma.AITranscriptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AITranscriptPayload>
          }
          aggregate: {
            args: Prisma.AITranscriptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAITranscript>
          }
          groupBy: {
            args: Prisma.AITranscriptGroupByArgs<ExtArgs>
            result: $Utils.Optional<AITranscriptGroupByOutputType>[]
          }
          count: {
            args: Prisma.AITranscriptCountArgs<ExtArgs>
            result: $Utils.Optional<AITranscriptCountAggregateOutputType> | number
          }
        }
      }
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>
        fields: Prisma.SubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscription>
          }
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number
          }
        }
      }
      Friendship: {
        payload: Prisma.$FriendshipPayload<ExtArgs>
        fields: Prisma.FriendshipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FriendshipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FriendshipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          findFirst: {
            args: Prisma.FriendshipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FriendshipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          findMany: {
            args: Prisma.FriendshipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>[]
          }
          create: {
            args: Prisma.FriendshipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          createMany: {
            args: Prisma.FriendshipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FriendshipCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>[]
          }
          delete: {
            args: Prisma.FriendshipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          update: {
            args: Prisma.FriendshipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          deleteMany: {
            args: Prisma.FriendshipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FriendshipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FriendshipUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>[]
          }
          upsert: {
            args: Prisma.FriendshipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          aggregate: {
            args: Prisma.FriendshipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFriendship>
          }
          groupBy: {
            args: Prisma.FriendshipGroupByArgs<ExtArgs>
            result: $Utils.Optional<FriendshipGroupByOutputType>[]
          }
          count: {
            args: Prisma.FriendshipCountArgs<ExtArgs>
            result: $Utils.Optional<FriendshipCountAggregateOutputType> | number
          }
        }
      }
      Report: {
        payload: Prisma.$ReportPayload<ExtArgs>
        fields: Prisma.ReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findFirst: {
            args: Prisma.ReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findMany: {
            args: Prisma.ReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          create: {
            args: Prisma.ReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          createMany: {
            args: Prisma.ReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          delete: {
            args: Prisma.ReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          update: {
            args: Prisma.ReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          deleteMany: {
            args: Prisma.ReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          upsert: {
            args: Prisma.ReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          aggregate: {
            args: Prisma.ReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReport>
          }
          groupBy: {
            args: Prisma.ReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReportCountArgs<ExtArgs>
            result: $Utils.Optional<ReportCountAggregateOutputType> | number
          }
        }
      }
      History: {
        payload: Prisma.$HistoryPayload<ExtArgs>
        fields: Prisma.HistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          findFirst: {
            args: Prisma.HistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          findMany: {
            args: Prisma.HistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>[]
          }
          create: {
            args: Prisma.HistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          createMany: {
            args: Prisma.HistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>[]
          }
          delete: {
            args: Prisma.HistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          update: {
            args: Prisma.HistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          deleteMany: {
            args: Prisma.HistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>[]
          }
          upsert: {
            args: Prisma.HistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          aggregate: {
            args: Prisma.HistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistory>
          }
          groupBy: {
            args: Prisma.HistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<HistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.HistoryCountArgs<ExtArgs>
            result: $Utils.Optional<HistoryCountAggregateOutputType> | number
          }
        }
      }
      Contact: {
        payload: Prisma.$ContactPayload<ExtArgs>
        fields: Prisma.ContactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findFirst: {
            args: Prisma.ContactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findMany: {
            args: Prisma.ContactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          create: {
            args: Prisma.ContactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          createMany: {
            args: Prisma.ContactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          delete: {
            args: Prisma.ContactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          update: {
            args: Prisma.ContactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          deleteMany: {
            args: Prisma.ContactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          upsert: {
            args: Prisma.ContactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          aggregate: {
            args: Prisma.ContactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContact>
          }
          groupBy: {
            args: Prisma.ContactGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactCountArgs<ExtArgs>
            result: $Utils.Optional<ContactCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    match?: MatchOmit
    room?: RoomOmit
    roomParticipant?: RoomParticipantOmit
    message?: MessageOmit
    messageWithFreinds?: MessageWithFreindsOmit
    aITranscript?: AITranscriptOmit
    subscription?: SubscriptionOmit
    friendship?: FriendshipOmit
    report?: ReportOmit
    history?: HistoryOmit
    contact?: ContactOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    matchesAsUser1: number
    matchesAsUser2: number
    historyAsUser1: number
    historyAsUser2: number
    roomsJoined: number
    subscriptions: number
    aitranscripts: number
    messages: number
    sentFriends: number
    receivedFriends: number
    userReported: number
    reportedUser: number
    messagesenderperson: number
    messagereceiverperson: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matchesAsUser1?: boolean | UserCountOutputTypeCountMatchesAsUser1Args
    matchesAsUser2?: boolean | UserCountOutputTypeCountMatchesAsUser2Args
    historyAsUser1?: boolean | UserCountOutputTypeCountHistoryAsUser1Args
    historyAsUser2?: boolean | UserCountOutputTypeCountHistoryAsUser2Args
    roomsJoined?: boolean | UserCountOutputTypeCountRoomsJoinedArgs
    subscriptions?: boolean | UserCountOutputTypeCountSubscriptionsArgs
    aitranscripts?: boolean | UserCountOutputTypeCountAitranscriptsArgs
    messages?: boolean | UserCountOutputTypeCountMessagesArgs
    sentFriends?: boolean | UserCountOutputTypeCountSentFriendsArgs
    receivedFriends?: boolean | UserCountOutputTypeCountReceivedFriendsArgs
    userReported?: boolean | UserCountOutputTypeCountUserReportedArgs
    reportedUser?: boolean | UserCountOutputTypeCountReportedUserArgs
    messagesenderperson?: boolean | UserCountOutputTypeCountMessagesenderpersonArgs
    messagereceiverperson?: boolean | UserCountOutputTypeCountMessagereceiverpersonArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMatchesAsUser1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMatchesAsUser2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHistoryAsUser1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHistoryAsUser2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRoomsJoinedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomParticipantWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAitranscriptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AITranscriptWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentFriendsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendshipWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedFriendsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendshipWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserReportedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReportedUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesenderpersonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWithFreindsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagereceiverpersonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWithFreindsWhereInput
  }


  /**
   * Count Type RoomCountOutputType
   */

  export type RoomCountOutputType = {
    participants: number
    messages: number
    aiEvents: number
    matches: number
  }

  export type RoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participants?: boolean | RoomCountOutputTypeCountParticipantsArgs
    messages?: boolean | RoomCountOutputTypeCountMessagesArgs
    aiEvents?: boolean | RoomCountOutputTypeCountAiEventsArgs
    matches?: boolean | RoomCountOutputTypeCountMatchesArgs
  }

  // Custom InputTypes
  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCountOutputType
     */
    select?: RoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomParticipantWhereInput
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountAiEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AITranscriptWhereInput
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type UserSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    clerkUserId: string | null
    email: string | null
    name: string | null
    imageUrl: string | null
    gender: $Enums.Gender | null
    dob: Date | null
    country: string | null
    state: string | null
    city: string | null
    latitude: number | null
    longitude: number | null
    isPremium: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    clerkUserId: string | null
    email: string | null
    name: string | null
    imageUrl: string | null
    gender: $Enums.Gender | null
    dob: Date | null
    country: string | null
    state: string | null
    city: string | null
    latitude: number | null
    longitude: number | null
    isPremium: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    clerkUserId: number
    email: number
    name: number
    imageUrl: number
    gender: number
    dob: number
    country: number
    state: number
    city: number
    latitude: number
    longitude: number
    isPremium: number
    interests: number
    preferredLang: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type UserSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    clerkUserId?: true
    email?: true
    name?: true
    imageUrl?: true
    gender?: true
    dob?: true
    country?: true
    state?: true
    city?: true
    latitude?: true
    longitude?: true
    isPremium?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    clerkUserId?: true
    email?: true
    name?: true
    imageUrl?: true
    gender?: true
    dob?: true
    country?: true
    state?: true
    city?: true
    latitude?: true
    longitude?: true
    isPremium?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    clerkUserId?: true
    email?: true
    name?: true
    imageUrl?: true
    gender?: true
    dob?: true
    country?: true
    state?: true
    city?: true
    latitude?: true
    longitude?: true
    isPremium?: true
    interests?: true
    preferredLang?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    clerkUserId: string
    email: string
    name: string | null
    imageUrl: string | null
    gender: $Enums.Gender
    dob: Date
    country: string | null
    state: string | null
    city: string | null
    latitude: number | null
    longitude: number | null
    isPremium: boolean
    interests: $Enums.Interest[]
    preferredLang: $Enums.Language[]
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkUserId?: boolean
    email?: boolean
    name?: boolean
    imageUrl?: boolean
    gender?: boolean
    dob?: boolean
    country?: boolean
    state?: boolean
    city?: boolean
    latitude?: boolean
    longitude?: boolean
    isPremium?: boolean
    interests?: boolean
    preferredLang?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    matchesAsUser1?: boolean | User$matchesAsUser1Args<ExtArgs>
    matchesAsUser2?: boolean | User$matchesAsUser2Args<ExtArgs>
    historyAsUser1?: boolean | User$historyAsUser1Args<ExtArgs>
    historyAsUser2?: boolean | User$historyAsUser2Args<ExtArgs>
    roomsJoined?: boolean | User$roomsJoinedArgs<ExtArgs>
    subscriptions?: boolean | User$subscriptionsArgs<ExtArgs>
    aitranscripts?: boolean | User$aitranscriptsArgs<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    sentFriends?: boolean | User$sentFriendsArgs<ExtArgs>
    receivedFriends?: boolean | User$receivedFriendsArgs<ExtArgs>
    userReported?: boolean | User$userReportedArgs<ExtArgs>
    reportedUser?: boolean | User$reportedUserArgs<ExtArgs>
    messagesenderperson?: boolean | User$messagesenderpersonArgs<ExtArgs>
    messagereceiverperson?: boolean | User$messagereceiverpersonArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkUserId?: boolean
    email?: boolean
    name?: boolean
    imageUrl?: boolean
    gender?: boolean
    dob?: boolean
    country?: boolean
    state?: boolean
    city?: boolean
    latitude?: boolean
    longitude?: boolean
    isPremium?: boolean
    interests?: boolean
    preferredLang?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkUserId?: boolean
    email?: boolean
    name?: boolean
    imageUrl?: boolean
    gender?: boolean
    dob?: boolean
    country?: boolean
    state?: boolean
    city?: boolean
    latitude?: boolean
    longitude?: boolean
    isPremium?: boolean
    interests?: boolean
    preferredLang?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    clerkUserId?: boolean
    email?: boolean
    name?: boolean
    imageUrl?: boolean
    gender?: boolean
    dob?: boolean
    country?: boolean
    state?: boolean
    city?: boolean
    latitude?: boolean
    longitude?: boolean
    isPremium?: boolean
    interests?: boolean
    preferredLang?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clerkUserId" | "email" | "name" | "imageUrl" | "gender" | "dob" | "country" | "state" | "city" | "latitude" | "longitude" | "isPremium" | "interests" | "preferredLang" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matchesAsUser1?: boolean | User$matchesAsUser1Args<ExtArgs>
    matchesAsUser2?: boolean | User$matchesAsUser2Args<ExtArgs>
    historyAsUser1?: boolean | User$historyAsUser1Args<ExtArgs>
    historyAsUser2?: boolean | User$historyAsUser2Args<ExtArgs>
    roomsJoined?: boolean | User$roomsJoinedArgs<ExtArgs>
    subscriptions?: boolean | User$subscriptionsArgs<ExtArgs>
    aitranscripts?: boolean | User$aitranscriptsArgs<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    sentFriends?: boolean | User$sentFriendsArgs<ExtArgs>
    receivedFriends?: boolean | User$receivedFriendsArgs<ExtArgs>
    userReported?: boolean | User$userReportedArgs<ExtArgs>
    reportedUser?: boolean | User$reportedUserArgs<ExtArgs>
    messagesenderperson?: boolean | User$messagesenderpersonArgs<ExtArgs>
    messagereceiverperson?: boolean | User$messagereceiverpersonArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      matchesAsUser1: Prisma.$MatchPayload<ExtArgs>[]
      matchesAsUser2: Prisma.$MatchPayload<ExtArgs>[]
      historyAsUser1: Prisma.$HistoryPayload<ExtArgs>[]
      historyAsUser2: Prisma.$HistoryPayload<ExtArgs>[]
      roomsJoined: Prisma.$RoomParticipantPayload<ExtArgs>[]
      subscriptions: Prisma.$SubscriptionPayload<ExtArgs>[]
      aitranscripts: Prisma.$AITranscriptPayload<ExtArgs>[]
      messages: Prisma.$MessagePayload<ExtArgs>[]
      sentFriends: Prisma.$FriendshipPayload<ExtArgs>[]
      receivedFriends: Prisma.$FriendshipPayload<ExtArgs>[]
      userReported: Prisma.$ReportPayload<ExtArgs>[]
      reportedUser: Prisma.$ReportPayload<ExtArgs>[]
      messagesenderperson: Prisma.$MessageWithFreindsPayload<ExtArgs>[]
      messagereceiverperson: Prisma.$MessageWithFreindsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clerkUserId: string
      email: string
      name: string | null
      imageUrl: string | null
      gender: $Enums.Gender
      dob: Date
      country: string | null
      state: string | null
      city: string | null
      latitude: number | null
      longitude: number | null
      isPremium: boolean
      interests: $Enums.Interest[]
      preferredLang: $Enums.Language[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    matchesAsUser1<T extends User$matchesAsUser1Args<ExtArgs> = {}>(args?: Subset<T, User$matchesAsUser1Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    matchesAsUser2<T extends User$matchesAsUser2Args<ExtArgs> = {}>(args?: Subset<T, User$matchesAsUser2Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    historyAsUser1<T extends User$historyAsUser1Args<ExtArgs> = {}>(args?: Subset<T, User$historyAsUser1Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    historyAsUser2<T extends User$historyAsUser2Args<ExtArgs> = {}>(args?: Subset<T, User$historyAsUser2Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    roomsJoined<T extends User$roomsJoinedArgs<ExtArgs> = {}>(args?: Subset<T, User$roomsJoinedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subscriptions<T extends User$subscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, User$subscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    aitranscripts<T extends User$aitranscriptsArgs<ExtArgs> = {}>(args?: Subset<T, User$aitranscriptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AITranscriptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends User$messagesArgs<ExtArgs> = {}>(args?: Subset<T, User$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentFriends<T extends User$sentFriendsArgs<ExtArgs> = {}>(args?: Subset<T, User$sentFriendsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedFriends<T extends User$receivedFriendsArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedFriendsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userReported<T extends User$userReportedArgs<ExtArgs> = {}>(args?: Subset<T, User$userReportedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reportedUser<T extends User$reportedUserArgs<ExtArgs> = {}>(args?: Subset<T, User$reportedUserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messagesenderperson<T extends User$messagesenderpersonArgs<ExtArgs> = {}>(args?: Subset<T, User$messagesenderpersonArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageWithFreindsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messagereceiverperson<T extends User$messagereceiverpersonArgs<ExtArgs> = {}>(args?: Subset<T, User$messagereceiverpersonArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageWithFreindsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly clerkUserId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly imageUrl: FieldRef<"User", 'String'>
    readonly gender: FieldRef<"User", 'Gender'>
    readonly dob: FieldRef<"User", 'DateTime'>
    readonly country: FieldRef<"User", 'String'>
    readonly state: FieldRef<"User", 'String'>
    readonly city: FieldRef<"User", 'String'>
    readonly latitude: FieldRef<"User", 'Float'>
    readonly longitude: FieldRef<"User", 'Float'>
    readonly isPremium: FieldRef<"User", 'Boolean'>
    readonly interests: FieldRef<"User", 'Interest[]'>
    readonly preferredLang: FieldRef<"User", 'Language[]'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.matchesAsUser1
   */
  export type User$matchesAsUser1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * User.matchesAsUser2
   */
  export type User$matchesAsUser2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * User.historyAsUser1
   */
  export type User$historyAsUser1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    where?: HistoryWhereInput
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    cursor?: HistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }

  /**
   * User.historyAsUser2
   */
  export type User$historyAsUser2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    where?: HistoryWhereInput
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    cursor?: HistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }

  /**
   * User.roomsJoined
   */
  export type User$roomsJoinedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomParticipant
     */
    select?: RoomParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomParticipant
     */
    omit?: RoomParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomParticipantInclude<ExtArgs> | null
    where?: RoomParticipantWhereInput
    orderBy?: RoomParticipantOrderByWithRelationInput | RoomParticipantOrderByWithRelationInput[]
    cursor?: RoomParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomParticipantScalarFieldEnum | RoomParticipantScalarFieldEnum[]
  }

  /**
   * User.subscriptions
   */
  export type User$subscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    cursor?: SubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * User.aitranscripts
   */
  export type User$aitranscriptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AITranscript
     */
    select?: AITranscriptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AITranscript
     */
    omit?: AITranscriptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AITranscriptInclude<ExtArgs> | null
    where?: AITranscriptWhereInput
    orderBy?: AITranscriptOrderByWithRelationInput | AITranscriptOrderByWithRelationInput[]
    cursor?: AITranscriptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AITranscriptScalarFieldEnum | AITranscriptScalarFieldEnum[]
  }

  /**
   * User.messages
   */
  export type User$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User.sentFriends
   */
  export type User$sentFriendsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    where?: FriendshipWhereInput
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    cursor?: FriendshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }

  /**
   * User.receivedFriends
   */
  export type User$receivedFriendsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    where?: FriendshipWhereInput
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    cursor?: FriendshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }

  /**
   * User.userReported
   */
  export type User$userReportedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    cursor?: ReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * User.reportedUser
   */
  export type User$reportedUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    cursor?: ReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * User.messagesenderperson
   */
  export type User$messagesenderpersonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageWithFreinds
     */
    select?: MessageWithFreindsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageWithFreinds
     */
    omit?: MessageWithFreindsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageWithFreindsInclude<ExtArgs> | null
    where?: MessageWithFreindsWhereInput
    orderBy?: MessageWithFreindsOrderByWithRelationInput | MessageWithFreindsOrderByWithRelationInput[]
    cursor?: MessageWithFreindsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageWithFreindsScalarFieldEnum | MessageWithFreindsScalarFieldEnum[]
  }

  /**
   * User.messagereceiverperson
   */
  export type User$messagereceiverpersonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageWithFreinds
     */
    select?: MessageWithFreindsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageWithFreinds
     */
    omit?: MessageWithFreindsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageWithFreindsInclude<ExtArgs> | null
    where?: MessageWithFreindsWhereInput
    orderBy?: MessageWithFreindsOrderByWithRelationInput | MessageWithFreindsOrderByWithRelationInput[]
    cursor?: MessageWithFreindsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageWithFreindsScalarFieldEnum | MessageWithFreindsScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Match
   */

  export type AggregateMatch = {
    _count: MatchCountAggregateOutputType | null
    _min: MatchMinAggregateOutputType | null
    _max: MatchMaxAggregateOutputType | null
  }

  export type MatchMinAggregateOutputType = {
    id: string | null
    user1Id: string | null
    user2Id: string | null
    roomId: string | null
    startedAt: Date | null
    endedAt: Date | null
  }

  export type MatchMaxAggregateOutputType = {
    id: string | null
    user1Id: string | null
    user2Id: string | null
    roomId: string | null
    startedAt: Date | null
    endedAt: Date | null
  }

  export type MatchCountAggregateOutputType = {
    id: number
    user1Id: number
    user2Id: number
    roomId: number
    startedAt: number
    endedAt: number
    _all: number
  }


  export type MatchMinAggregateInputType = {
    id?: true
    user1Id?: true
    user2Id?: true
    roomId?: true
    startedAt?: true
    endedAt?: true
  }

  export type MatchMaxAggregateInputType = {
    id?: true
    user1Id?: true
    user2Id?: true
    roomId?: true
    startedAt?: true
    endedAt?: true
  }

  export type MatchCountAggregateInputType = {
    id?: true
    user1Id?: true
    user2Id?: true
    roomId?: true
    startedAt?: true
    endedAt?: true
    _all?: true
  }

  export type MatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Match to aggregate.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Matches
    **/
    _count?: true | MatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchMaxAggregateInputType
  }

  export type GetMatchAggregateType<T extends MatchAggregateArgs> = {
        [P in keyof T & keyof AggregateMatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatch[P]>
      : GetScalarType<T[P], AggregateMatch[P]>
  }




  export type MatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithAggregationInput | MatchOrderByWithAggregationInput[]
    by: MatchScalarFieldEnum[] | MatchScalarFieldEnum
    having?: MatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchCountAggregateInputType | true
    _min?: MatchMinAggregateInputType
    _max?: MatchMaxAggregateInputType
  }

  export type MatchGroupByOutputType = {
    id: string
    user1Id: string
    user2Id: string
    roomId: string | null
    startedAt: Date
    endedAt: Date | null
    _count: MatchCountAggregateOutputType | null
    _min: MatchMinAggregateOutputType | null
    _max: MatchMaxAggregateOutputType | null
  }

  type GetMatchGroupByPayload<T extends MatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchGroupByOutputType[P]>
            : GetScalarType<T[P], MatchGroupByOutputType[P]>
        }
      >
    >


  export type MatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user1Id?: boolean
    user2Id?: boolean
    roomId?: boolean
    startedAt?: boolean
    endedAt?: boolean
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | Match$roomArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user1Id?: boolean
    user2Id?: boolean
    roomId?: boolean
    startedAt?: boolean
    endedAt?: boolean
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | Match$roomArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user1Id?: boolean
    user2Id?: boolean
    roomId?: boolean
    startedAt?: boolean
    endedAt?: boolean
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | Match$roomArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectScalar = {
    id?: boolean
    user1Id?: boolean
    user2Id?: boolean
    roomId?: boolean
    startedAt?: boolean
    endedAt?: boolean
  }

  export type MatchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user1Id" | "user2Id" | "roomId" | "startedAt" | "endedAt", ExtArgs["result"]["match"]>
  export type MatchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | Match$roomArgs<ExtArgs>
  }
  export type MatchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | Match$roomArgs<ExtArgs>
  }
  export type MatchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | Match$roomArgs<ExtArgs>
  }

  export type $MatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Match"
    objects: {
      user1: Prisma.$UserPayload<ExtArgs>
      user2: Prisma.$UserPayload<ExtArgs>
      room: Prisma.$RoomPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user1Id: string
      user2Id: string
      roomId: string | null
      startedAt: Date
      endedAt: Date | null
    }, ExtArgs["result"]["match"]>
    composites: {}
  }

  type MatchGetPayload<S extends boolean | null | undefined | MatchDefaultArgs> = $Result.GetResult<Prisma.$MatchPayload, S>

  type MatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatchCountAggregateInputType | true
    }

  export interface MatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Match'], meta: { name: 'Match' } }
    /**
     * Find zero or one Match that matches the filter.
     * @param {MatchFindUniqueArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatchFindUniqueArgs>(args: SelectSubset<T, MatchFindUniqueArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Match that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatchFindUniqueOrThrowArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatchFindUniqueOrThrowArgs>(args: SelectSubset<T, MatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Match that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindFirstArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatchFindFirstArgs>(args?: SelectSubset<T, MatchFindFirstArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Match that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindFirstOrThrowArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatchFindFirstOrThrowArgs>(args?: SelectSubset<T, MatchFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Matches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Matches
     * const matches = await prisma.match.findMany()
     * 
     * // Get first 10 Matches
     * const matches = await prisma.match.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchWithIdOnly = await prisma.match.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatchFindManyArgs>(args?: SelectSubset<T, MatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Match.
     * @param {MatchCreateArgs} args - Arguments to create a Match.
     * @example
     * // Create one Match
     * const Match = await prisma.match.create({
     *   data: {
     *     // ... data to create a Match
     *   }
     * })
     * 
     */
    create<T extends MatchCreateArgs>(args: SelectSubset<T, MatchCreateArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Matches.
     * @param {MatchCreateManyArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const match = await prisma.match.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatchCreateManyArgs>(args?: SelectSubset<T, MatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Matches and returns the data saved in the database.
     * @param {MatchCreateManyAndReturnArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const match = await prisma.match.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Matches and only return the `id`
     * const matchWithIdOnly = await prisma.match.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatchCreateManyAndReturnArgs>(args?: SelectSubset<T, MatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Match.
     * @param {MatchDeleteArgs} args - Arguments to delete one Match.
     * @example
     * // Delete one Match
     * const Match = await prisma.match.delete({
     *   where: {
     *     // ... filter to delete one Match
     *   }
     * })
     * 
     */
    delete<T extends MatchDeleteArgs>(args: SelectSubset<T, MatchDeleteArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Match.
     * @param {MatchUpdateArgs} args - Arguments to update one Match.
     * @example
     * // Update one Match
     * const match = await prisma.match.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatchUpdateArgs>(args: SelectSubset<T, MatchUpdateArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Matches.
     * @param {MatchDeleteManyArgs} args - Arguments to filter Matches to delete.
     * @example
     * // Delete a few Matches
     * const { count } = await prisma.match.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatchDeleteManyArgs>(args?: SelectSubset<T, MatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Matches
     * const match = await prisma.match.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatchUpdateManyArgs>(args: SelectSubset<T, MatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches and returns the data updated in the database.
     * @param {MatchUpdateManyAndReturnArgs} args - Arguments to update many Matches.
     * @example
     * // Update many Matches
     * const match = await prisma.match.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Matches and only return the `id`
     * const matchWithIdOnly = await prisma.match.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MatchUpdateManyAndReturnArgs>(args: SelectSubset<T, MatchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Match.
     * @param {MatchUpsertArgs} args - Arguments to update or create a Match.
     * @example
     * // Update or create a Match
     * const match = await prisma.match.upsert({
     *   create: {
     *     // ... data to create a Match
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Match we want to update
     *   }
     * })
     */
    upsert<T extends MatchUpsertArgs>(args: SelectSubset<T, MatchUpsertArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchCountArgs} args - Arguments to filter Matches to count.
     * @example
     * // Count the number of Matches
     * const count = await prisma.match.count({
     *   where: {
     *     // ... the filter for the Matches we want to count
     *   }
     * })
    **/
    count<T extends MatchCountArgs>(
      args?: Subset<T, MatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MatchAggregateArgs>(args: Subset<T, MatchAggregateArgs>): Prisma.PrismaPromise<GetMatchAggregateType<T>>

    /**
     * Group by Match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchGroupByArgs['orderBy'] }
        : { orderBy?: MatchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Match model
   */
  readonly fields: MatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Match.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user1<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user2<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    room<T extends Match$roomArgs<ExtArgs> = {}>(args?: Subset<T, Match$roomArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Match model
   */
  interface MatchFieldRefs {
    readonly id: FieldRef<"Match", 'String'>
    readonly user1Id: FieldRef<"Match", 'String'>
    readonly user2Id: FieldRef<"Match", 'String'>
    readonly roomId: FieldRef<"Match", 'String'>
    readonly startedAt: FieldRef<"Match", 'DateTime'>
    readonly endedAt: FieldRef<"Match", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Match findUnique
   */
  export type MatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match findUniqueOrThrow
   */
  export type MatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match findFirst
   */
  export type MatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match findFirstOrThrow
   */
  export type MatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match findMany
   */
  export type MatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Matches to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match create
   */
  export type MatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The data needed to create a Match.
     */
    data: XOR<MatchCreateInput, MatchUncheckedCreateInput>
  }

  /**
   * Match createMany
   */
  export type MatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Matches.
     */
    data: MatchCreateManyInput | MatchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Match createManyAndReturn
   */
  export type MatchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * The data used to create many Matches.
     */
    data: MatchCreateManyInput | MatchCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Match update
   */
  export type MatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The data needed to update a Match.
     */
    data: XOR<MatchUpdateInput, MatchUncheckedUpdateInput>
    /**
     * Choose, which Match to update.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match updateMany
   */
  export type MatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Matches.
     */
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyInput>
    /**
     * Filter which Matches to update
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to update.
     */
    limit?: number
  }

  /**
   * Match updateManyAndReturn
   */
  export type MatchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * The data used to update Matches.
     */
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyInput>
    /**
     * Filter which Matches to update
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Match upsert
   */
  export type MatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The filter to search for the Match to update in case it exists.
     */
    where: MatchWhereUniqueInput
    /**
     * In case the Match found by the `where` argument doesn't exist, create a new Match with this data.
     */
    create: XOR<MatchCreateInput, MatchUncheckedCreateInput>
    /**
     * In case the Match was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchUpdateInput, MatchUncheckedUpdateInput>
  }

  /**
   * Match delete
   */
  export type MatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter which Match to delete.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match deleteMany
   */
  export type MatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Matches to delete
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to delete.
     */
    limit?: number
  }

  /**
   * Match.room
   */
  export type Match$roomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
  }

  /**
   * Match without action
   */
  export type MatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
  }


  /**
   * Model Room
   */

  export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  export type RoomMinAggregateOutputType = {
    id: string | null
    isActive: boolean | null
    createdAt: Date | null
    endedAt: Date | null
  }

  export type RoomMaxAggregateOutputType = {
    id: string | null
    isActive: boolean | null
    createdAt: Date | null
    endedAt: Date | null
  }

  export type RoomCountAggregateOutputType = {
    id: number
    isActive: number
    createdAt: number
    endedAt: number
    _all: number
  }


  export type RoomMinAggregateInputType = {
    id?: true
    isActive?: true
    createdAt?: true
    endedAt?: true
  }

  export type RoomMaxAggregateInputType = {
    id?: true
    isActive?: true
    createdAt?: true
    endedAt?: true
  }

  export type RoomCountAggregateInputType = {
    id?: true
    isActive?: true
    createdAt?: true
    endedAt?: true
    _all?: true
  }

  export type RoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Room to aggregate.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rooms
    **/
    _count?: true | RoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMaxAggregateInputType
  }

  export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom[P]>
      : GetScalarType<T[P], AggregateRoom[P]>
  }




  export type RoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithAggregationInput | RoomOrderByWithAggregationInput[]
    by: RoomScalarFieldEnum[] | RoomScalarFieldEnum
    having?: RoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCountAggregateInputType | true
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
  }

  export type RoomGroupByOutputType = {
    id: string
    isActive: boolean
    createdAt: Date
    endedAt: Date | null
    _count: RoomCountAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  type GetRoomGroupByPayload<T extends RoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomGroupByOutputType[P]>
            : GetScalarType<T[P], RoomGroupByOutputType[P]>
        }
      >
    >


  export type RoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isActive?: boolean
    createdAt?: boolean
    endedAt?: boolean
    participants?: boolean | Room$participantsArgs<ExtArgs>
    messages?: boolean | Room$messagesArgs<ExtArgs>
    aiEvents?: boolean | Room$aiEventsArgs<ExtArgs>
    matches?: boolean | Room$matchesArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isActive?: boolean
    createdAt?: boolean
    endedAt?: boolean
  }, ExtArgs["result"]["room"]>

  export type RoomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isActive?: boolean
    createdAt?: boolean
    endedAt?: boolean
  }, ExtArgs["result"]["room"]>

  export type RoomSelectScalar = {
    id?: boolean
    isActive?: boolean
    createdAt?: boolean
    endedAt?: boolean
  }

  export type RoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "isActive" | "createdAt" | "endedAt", ExtArgs["result"]["room"]>
  export type RoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participants?: boolean | Room$participantsArgs<ExtArgs>
    messages?: boolean | Room$messagesArgs<ExtArgs>
    aiEvents?: boolean | Room$aiEventsArgs<ExtArgs>
    matches?: boolean | Room$matchesArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Room"
    objects: {
      participants: Prisma.$RoomParticipantPayload<ExtArgs>[]
      messages: Prisma.$MessagePayload<ExtArgs>[]
      aiEvents: Prisma.$AITranscriptPayload<ExtArgs>[]
      matches: Prisma.$MatchPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      isActive: boolean
      createdAt: Date
      endedAt: Date | null
    }, ExtArgs["result"]["room"]>
    composites: {}
  }

  type RoomGetPayload<S extends boolean | null | undefined | RoomDefaultArgs> = $Result.GetResult<Prisma.$RoomPayload, S>

  type RoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomCountAggregateInputType | true
    }

  export interface RoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Room'], meta: { name: 'Room' } }
    /**
     * Find zero or one Room that matches the filter.
     * @param {RoomFindUniqueArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomFindUniqueArgs>(args: SelectSubset<T, RoomFindUniqueArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Room that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomFindUniqueOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomFindFirstArgs>(args?: SelectSubset<T, RoomFindFirstArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.room.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.room.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomWithIdOnly = await prisma.room.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomFindManyArgs>(args?: SelectSubset<T, RoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Room.
     * @param {RoomCreateArgs} args - Arguments to create a Room.
     * @example
     * // Create one Room
     * const Room = await prisma.room.create({
     *   data: {
     *     // ... data to create a Room
     *   }
     * })
     * 
     */
    create<T extends RoomCreateArgs>(args: SelectSubset<T, RoomCreateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rooms.
     * @param {RoomCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomCreateManyArgs>(args?: SelectSubset<T, RoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rooms and returns the data saved in the database.
     * @param {RoomCreateManyAndReturnArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Room.
     * @param {RoomDeleteArgs} args - Arguments to delete one Room.
     * @example
     * // Delete one Room
     * const Room = await prisma.room.delete({
     *   where: {
     *     // ... filter to delete one Room
     *   }
     * })
     * 
     */
    delete<T extends RoomDeleteArgs>(args: SelectSubset<T, RoomDeleteArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Room.
     * @param {RoomUpdateArgs} args - Arguments to update one Room.
     * @example
     * // Update one Room
     * const room = await prisma.room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomUpdateArgs>(args: SelectSubset<T, RoomUpdateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rooms.
     * @param {RoomDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomDeleteManyArgs>(args?: SelectSubset<T, RoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomUpdateManyArgs>(args: SelectSubset<T, RoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms and returns the data updated in the database.
     * @param {RoomUpdateManyAndReturnArgs} args - Arguments to update many Rooms.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoomUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Room.
     * @param {RoomUpsertArgs} args - Arguments to update or create a Room.
     * @example
     * // Update or create a Room
     * const room = await prisma.room.upsert({
     *   create: {
     *     // ... data to create a Room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room we want to update
     *   }
     * })
     */
    upsert<T extends RoomUpsertArgs>(args: SelectSubset<T, RoomUpsertArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.room.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends RoomCountArgs>(
      args?: Subset<T, RoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomAggregateArgs>(args: Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>

    /**
     * Group by Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomGroupByArgs['orderBy'] }
        : { orderBy?: RoomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Room model
   */
  readonly fields: RoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    participants<T extends Room$participantsArgs<ExtArgs> = {}>(args?: Subset<T, Room$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends Room$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Room$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    aiEvents<T extends Room$aiEventsArgs<ExtArgs> = {}>(args?: Subset<T, Room$aiEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AITranscriptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    matches<T extends Room$matchesArgs<ExtArgs> = {}>(args?: Subset<T, Room$matchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Room model
   */
  interface RoomFieldRefs {
    readonly id: FieldRef<"Room", 'String'>
    readonly isActive: FieldRef<"Room", 'Boolean'>
    readonly createdAt: FieldRef<"Room", 'DateTime'>
    readonly endedAt: FieldRef<"Room", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Room findUnique
   */
  export type RoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findUniqueOrThrow
   */
  export type RoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findFirst
   */
  export type RoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findFirstOrThrow
   */
  export type RoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findMany
   */
  export type RoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room create
   */
  export type RoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to create a Room.
     */
    data?: XOR<RoomCreateInput, RoomUncheckedCreateInput>
  }

  /**
   * Room createMany
   */
  export type RoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Room createManyAndReturn
   */
  export type RoomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Room update
   */
  export type RoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to update a Room.
     */
    data: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
    /**
     * Choose, which Room to update.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room updateMany
   */
  export type RoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
  }

  /**
   * Room updateManyAndReturn
   */
  export type RoomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
  }

  /**
   * Room upsert
   */
  export type RoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The filter to search for the Room to update in case it exists.
     */
    where: RoomWhereUniqueInput
    /**
     * In case the Room found by the `where` argument doesn't exist, create a new Room with this data.
     */
    create: XOR<RoomCreateInput, RoomUncheckedCreateInput>
    /**
     * In case the Room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
  }

  /**
   * Room delete
   */
  export type RoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter which Room to delete.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room deleteMany
   */
  export type RoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rooms to delete
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to delete.
     */
    limit?: number
  }

  /**
   * Room.participants
   */
  export type Room$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomParticipant
     */
    select?: RoomParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomParticipant
     */
    omit?: RoomParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomParticipantInclude<ExtArgs> | null
    where?: RoomParticipantWhereInput
    orderBy?: RoomParticipantOrderByWithRelationInput | RoomParticipantOrderByWithRelationInput[]
    cursor?: RoomParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomParticipantScalarFieldEnum | RoomParticipantScalarFieldEnum[]
  }

  /**
   * Room.messages
   */
  export type Room$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Room.aiEvents
   */
  export type Room$aiEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AITranscript
     */
    select?: AITranscriptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AITranscript
     */
    omit?: AITranscriptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AITranscriptInclude<ExtArgs> | null
    where?: AITranscriptWhereInput
    orderBy?: AITranscriptOrderByWithRelationInput | AITranscriptOrderByWithRelationInput[]
    cursor?: AITranscriptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AITranscriptScalarFieldEnum | AITranscriptScalarFieldEnum[]
  }

  /**
   * Room.matches
   */
  export type Room$matchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Room without action
   */
  export type RoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
  }


  /**
   * Model RoomParticipant
   */

  export type AggregateRoomParticipant = {
    _count: RoomParticipantCountAggregateOutputType | null
    _min: RoomParticipantMinAggregateOutputType | null
    _max: RoomParticipantMaxAggregateOutputType | null
  }

  export type RoomParticipantMinAggregateOutputType = {
    id: string | null
    userId: string | null
    roomId: string | null
    joinedAt: Date | null
    leftAt: Date | null
  }

  export type RoomParticipantMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    roomId: string | null
    joinedAt: Date | null
    leftAt: Date | null
  }

  export type RoomParticipantCountAggregateOutputType = {
    id: number
    userId: number
    roomId: number
    joinedAt: number
    leftAt: number
    _all: number
  }


  export type RoomParticipantMinAggregateInputType = {
    id?: true
    userId?: true
    roomId?: true
    joinedAt?: true
    leftAt?: true
  }

  export type RoomParticipantMaxAggregateInputType = {
    id?: true
    userId?: true
    roomId?: true
    joinedAt?: true
    leftAt?: true
  }

  export type RoomParticipantCountAggregateInputType = {
    id?: true
    userId?: true
    roomId?: true
    joinedAt?: true
    leftAt?: true
    _all?: true
  }

  export type RoomParticipantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomParticipant to aggregate.
     */
    where?: RoomParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomParticipants to fetch.
     */
    orderBy?: RoomParticipantOrderByWithRelationInput | RoomParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoomParticipants
    **/
    _count?: true | RoomParticipantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomParticipantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomParticipantMaxAggregateInputType
  }

  export type GetRoomParticipantAggregateType<T extends RoomParticipantAggregateArgs> = {
        [P in keyof T & keyof AggregateRoomParticipant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoomParticipant[P]>
      : GetScalarType<T[P], AggregateRoomParticipant[P]>
  }




  export type RoomParticipantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomParticipantWhereInput
    orderBy?: RoomParticipantOrderByWithAggregationInput | RoomParticipantOrderByWithAggregationInput[]
    by: RoomParticipantScalarFieldEnum[] | RoomParticipantScalarFieldEnum
    having?: RoomParticipantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomParticipantCountAggregateInputType | true
    _min?: RoomParticipantMinAggregateInputType
    _max?: RoomParticipantMaxAggregateInputType
  }

  export type RoomParticipantGroupByOutputType = {
    id: string
    userId: string
    roomId: string
    joinedAt: Date
    leftAt: Date | null
    _count: RoomParticipantCountAggregateOutputType | null
    _min: RoomParticipantMinAggregateOutputType | null
    _max: RoomParticipantMaxAggregateOutputType | null
  }

  type GetRoomParticipantGroupByPayload<T extends RoomParticipantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomParticipantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomParticipantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomParticipantGroupByOutputType[P]>
            : GetScalarType<T[P], RoomParticipantGroupByOutputType[P]>
        }
      >
    >


  export type RoomParticipantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    roomId?: boolean
    joinedAt?: boolean
    leftAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomParticipant"]>

  export type RoomParticipantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    roomId?: boolean
    joinedAt?: boolean
    leftAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomParticipant"]>

  export type RoomParticipantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    roomId?: boolean
    joinedAt?: boolean
    leftAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomParticipant"]>

  export type RoomParticipantSelectScalar = {
    id?: boolean
    userId?: boolean
    roomId?: boolean
    joinedAt?: boolean
    leftAt?: boolean
  }

  export type RoomParticipantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "roomId" | "joinedAt" | "leftAt", ExtArgs["result"]["roomParticipant"]>
  export type RoomParticipantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }
  export type RoomParticipantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }
  export type RoomParticipantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }

  export type $RoomParticipantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoomParticipant"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      room: Prisma.$RoomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      roomId: string
      joinedAt: Date
      leftAt: Date | null
    }, ExtArgs["result"]["roomParticipant"]>
    composites: {}
  }

  type RoomParticipantGetPayload<S extends boolean | null | undefined | RoomParticipantDefaultArgs> = $Result.GetResult<Prisma.$RoomParticipantPayload, S>

  type RoomParticipantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomParticipantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomParticipantCountAggregateInputType | true
    }

  export interface RoomParticipantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoomParticipant'], meta: { name: 'RoomParticipant' } }
    /**
     * Find zero or one RoomParticipant that matches the filter.
     * @param {RoomParticipantFindUniqueArgs} args - Arguments to find a RoomParticipant
     * @example
     * // Get one RoomParticipant
     * const roomParticipant = await prisma.roomParticipant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomParticipantFindUniqueArgs>(args: SelectSubset<T, RoomParticipantFindUniqueArgs<ExtArgs>>): Prisma__RoomParticipantClient<$Result.GetResult<Prisma.$RoomParticipantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RoomParticipant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomParticipantFindUniqueOrThrowArgs} args - Arguments to find a RoomParticipant
     * @example
     * // Get one RoomParticipant
     * const roomParticipant = await prisma.roomParticipant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomParticipantFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomParticipantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomParticipantClient<$Result.GetResult<Prisma.$RoomParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomParticipant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomParticipantFindFirstArgs} args - Arguments to find a RoomParticipant
     * @example
     * // Get one RoomParticipant
     * const roomParticipant = await prisma.roomParticipant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomParticipantFindFirstArgs>(args?: SelectSubset<T, RoomParticipantFindFirstArgs<ExtArgs>>): Prisma__RoomParticipantClient<$Result.GetResult<Prisma.$RoomParticipantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomParticipant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomParticipantFindFirstOrThrowArgs} args - Arguments to find a RoomParticipant
     * @example
     * // Get one RoomParticipant
     * const roomParticipant = await prisma.roomParticipant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomParticipantFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomParticipantFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomParticipantClient<$Result.GetResult<Prisma.$RoomParticipantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RoomParticipants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomParticipantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoomParticipants
     * const roomParticipants = await prisma.roomParticipant.findMany()
     * 
     * // Get first 10 RoomParticipants
     * const roomParticipants = await prisma.roomParticipant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomParticipantWithIdOnly = await prisma.roomParticipant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomParticipantFindManyArgs>(args?: SelectSubset<T, RoomParticipantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RoomParticipant.
     * @param {RoomParticipantCreateArgs} args - Arguments to create a RoomParticipant.
     * @example
     * // Create one RoomParticipant
     * const RoomParticipant = await prisma.roomParticipant.create({
     *   data: {
     *     // ... data to create a RoomParticipant
     *   }
     * })
     * 
     */
    create<T extends RoomParticipantCreateArgs>(args: SelectSubset<T, RoomParticipantCreateArgs<ExtArgs>>): Prisma__RoomParticipantClient<$Result.GetResult<Prisma.$RoomParticipantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RoomParticipants.
     * @param {RoomParticipantCreateManyArgs} args - Arguments to create many RoomParticipants.
     * @example
     * // Create many RoomParticipants
     * const roomParticipant = await prisma.roomParticipant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomParticipantCreateManyArgs>(args?: SelectSubset<T, RoomParticipantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RoomParticipants and returns the data saved in the database.
     * @param {RoomParticipantCreateManyAndReturnArgs} args - Arguments to create many RoomParticipants.
     * @example
     * // Create many RoomParticipants
     * const roomParticipant = await prisma.roomParticipant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RoomParticipants and only return the `id`
     * const roomParticipantWithIdOnly = await prisma.roomParticipant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomParticipantCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomParticipantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomParticipantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RoomParticipant.
     * @param {RoomParticipantDeleteArgs} args - Arguments to delete one RoomParticipant.
     * @example
     * // Delete one RoomParticipant
     * const RoomParticipant = await prisma.roomParticipant.delete({
     *   where: {
     *     // ... filter to delete one RoomParticipant
     *   }
     * })
     * 
     */
    delete<T extends RoomParticipantDeleteArgs>(args: SelectSubset<T, RoomParticipantDeleteArgs<ExtArgs>>): Prisma__RoomParticipantClient<$Result.GetResult<Prisma.$RoomParticipantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RoomParticipant.
     * @param {RoomParticipantUpdateArgs} args - Arguments to update one RoomParticipant.
     * @example
     * // Update one RoomParticipant
     * const roomParticipant = await prisma.roomParticipant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomParticipantUpdateArgs>(args: SelectSubset<T, RoomParticipantUpdateArgs<ExtArgs>>): Prisma__RoomParticipantClient<$Result.GetResult<Prisma.$RoomParticipantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RoomParticipants.
     * @param {RoomParticipantDeleteManyArgs} args - Arguments to filter RoomParticipants to delete.
     * @example
     * // Delete a few RoomParticipants
     * const { count } = await prisma.roomParticipant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomParticipantDeleteManyArgs>(args?: SelectSubset<T, RoomParticipantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomParticipantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoomParticipants
     * const roomParticipant = await prisma.roomParticipant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomParticipantUpdateManyArgs>(args: SelectSubset<T, RoomParticipantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomParticipants and returns the data updated in the database.
     * @param {RoomParticipantUpdateManyAndReturnArgs} args - Arguments to update many RoomParticipants.
     * @example
     * // Update many RoomParticipants
     * const roomParticipant = await prisma.roomParticipant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RoomParticipants and only return the `id`
     * const roomParticipantWithIdOnly = await prisma.roomParticipant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoomParticipantUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomParticipantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomParticipantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RoomParticipant.
     * @param {RoomParticipantUpsertArgs} args - Arguments to update or create a RoomParticipant.
     * @example
     * // Update or create a RoomParticipant
     * const roomParticipant = await prisma.roomParticipant.upsert({
     *   create: {
     *     // ... data to create a RoomParticipant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoomParticipant we want to update
     *   }
     * })
     */
    upsert<T extends RoomParticipantUpsertArgs>(args: SelectSubset<T, RoomParticipantUpsertArgs<ExtArgs>>): Prisma__RoomParticipantClient<$Result.GetResult<Prisma.$RoomParticipantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RoomParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomParticipantCountArgs} args - Arguments to filter RoomParticipants to count.
     * @example
     * // Count the number of RoomParticipants
     * const count = await prisma.roomParticipant.count({
     *   where: {
     *     // ... the filter for the RoomParticipants we want to count
     *   }
     * })
    **/
    count<T extends RoomParticipantCountArgs>(
      args?: Subset<T, RoomParticipantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomParticipantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoomParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomParticipantAggregateArgs>(args: Subset<T, RoomParticipantAggregateArgs>): Prisma.PrismaPromise<GetRoomParticipantAggregateType<T>>

    /**
     * Group by RoomParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomParticipantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomParticipantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomParticipantGroupByArgs['orderBy'] }
        : { orderBy?: RoomParticipantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoomParticipant model
   */
  readonly fields: RoomParticipantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoomParticipant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomParticipantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RoomParticipant model
   */
  interface RoomParticipantFieldRefs {
    readonly id: FieldRef<"RoomParticipant", 'String'>
    readonly userId: FieldRef<"RoomParticipant", 'String'>
    readonly roomId: FieldRef<"RoomParticipant", 'String'>
    readonly joinedAt: FieldRef<"RoomParticipant", 'DateTime'>
    readonly leftAt: FieldRef<"RoomParticipant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RoomParticipant findUnique
   */
  export type RoomParticipantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomParticipant
     */
    select?: RoomParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomParticipant
     */
    omit?: RoomParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomParticipantInclude<ExtArgs> | null
    /**
     * Filter, which RoomParticipant to fetch.
     */
    where: RoomParticipantWhereUniqueInput
  }

  /**
   * RoomParticipant findUniqueOrThrow
   */
  export type RoomParticipantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomParticipant
     */
    select?: RoomParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomParticipant
     */
    omit?: RoomParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomParticipantInclude<ExtArgs> | null
    /**
     * Filter, which RoomParticipant to fetch.
     */
    where: RoomParticipantWhereUniqueInput
  }

  /**
   * RoomParticipant findFirst
   */
  export type RoomParticipantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomParticipant
     */
    select?: RoomParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomParticipant
     */
    omit?: RoomParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomParticipantInclude<ExtArgs> | null
    /**
     * Filter, which RoomParticipant to fetch.
     */
    where?: RoomParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomParticipants to fetch.
     */
    orderBy?: RoomParticipantOrderByWithRelationInput | RoomParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomParticipants.
     */
    cursor?: RoomParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomParticipants.
     */
    distinct?: RoomParticipantScalarFieldEnum | RoomParticipantScalarFieldEnum[]
  }

  /**
   * RoomParticipant findFirstOrThrow
   */
  export type RoomParticipantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomParticipant
     */
    select?: RoomParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomParticipant
     */
    omit?: RoomParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomParticipantInclude<ExtArgs> | null
    /**
     * Filter, which RoomParticipant to fetch.
     */
    where?: RoomParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomParticipants to fetch.
     */
    orderBy?: RoomParticipantOrderByWithRelationInput | RoomParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomParticipants.
     */
    cursor?: RoomParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomParticipants.
     */
    distinct?: RoomParticipantScalarFieldEnum | RoomParticipantScalarFieldEnum[]
  }

  /**
   * RoomParticipant findMany
   */
  export type RoomParticipantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomParticipant
     */
    select?: RoomParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomParticipant
     */
    omit?: RoomParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomParticipantInclude<ExtArgs> | null
    /**
     * Filter, which RoomParticipants to fetch.
     */
    where?: RoomParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomParticipants to fetch.
     */
    orderBy?: RoomParticipantOrderByWithRelationInput | RoomParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoomParticipants.
     */
    cursor?: RoomParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomParticipants.
     */
    skip?: number
    distinct?: RoomParticipantScalarFieldEnum | RoomParticipantScalarFieldEnum[]
  }

  /**
   * RoomParticipant create
   */
  export type RoomParticipantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomParticipant
     */
    select?: RoomParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomParticipant
     */
    omit?: RoomParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomParticipantInclude<ExtArgs> | null
    /**
     * The data needed to create a RoomParticipant.
     */
    data: XOR<RoomParticipantCreateInput, RoomParticipantUncheckedCreateInput>
  }

  /**
   * RoomParticipant createMany
   */
  export type RoomParticipantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoomParticipants.
     */
    data: RoomParticipantCreateManyInput | RoomParticipantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoomParticipant createManyAndReturn
   */
  export type RoomParticipantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomParticipant
     */
    select?: RoomParticipantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoomParticipant
     */
    omit?: RoomParticipantOmit<ExtArgs> | null
    /**
     * The data used to create many RoomParticipants.
     */
    data: RoomParticipantCreateManyInput | RoomParticipantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomParticipantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoomParticipant update
   */
  export type RoomParticipantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomParticipant
     */
    select?: RoomParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomParticipant
     */
    omit?: RoomParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomParticipantInclude<ExtArgs> | null
    /**
     * The data needed to update a RoomParticipant.
     */
    data: XOR<RoomParticipantUpdateInput, RoomParticipantUncheckedUpdateInput>
    /**
     * Choose, which RoomParticipant to update.
     */
    where: RoomParticipantWhereUniqueInput
  }

  /**
   * RoomParticipant updateMany
   */
  export type RoomParticipantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoomParticipants.
     */
    data: XOR<RoomParticipantUpdateManyMutationInput, RoomParticipantUncheckedUpdateManyInput>
    /**
     * Filter which RoomParticipants to update
     */
    where?: RoomParticipantWhereInput
    /**
     * Limit how many RoomParticipants to update.
     */
    limit?: number
  }

  /**
   * RoomParticipant updateManyAndReturn
   */
  export type RoomParticipantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomParticipant
     */
    select?: RoomParticipantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoomParticipant
     */
    omit?: RoomParticipantOmit<ExtArgs> | null
    /**
     * The data used to update RoomParticipants.
     */
    data: XOR<RoomParticipantUpdateManyMutationInput, RoomParticipantUncheckedUpdateManyInput>
    /**
     * Filter which RoomParticipants to update
     */
    where?: RoomParticipantWhereInput
    /**
     * Limit how many RoomParticipants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomParticipantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoomParticipant upsert
   */
  export type RoomParticipantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomParticipant
     */
    select?: RoomParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomParticipant
     */
    omit?: RoomParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomParticipantInclude<ExtArgs> | null
    /**
     * The filter to search for the RoomParticipant to update in case it exists.
     */
    where: RoomParticipantWhereUniqueInput
    /**
     * In case the RoomParticipant found by the `where` argument doesn't exist, create a new RoomParticipant with this data.
     */
    create: XOR<RoomParticipantCreateInput, RoomParticipantUncheckedCreateInput>
    /**
     * In case the RoomParticipant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomParticipantUpdateInput, RoomParticipantUncheckedUpdateInput>
  }

  /**
   * RoomParticipant delete
   */
  export type RoomParticipantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomParticipant
     */
    select?: RoomParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomParticipant
     */
    omit?: RoomParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomParticipantInclude<ExtArgs> | null
    /**
     * Filter which RoomParticipant to delete.
     */
    where: RoomParticipantWhereUniqueInput
  }

  /**
   * RoomParticipant deleteMany
   */
  export type RoomParticipantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomParticipants to delete
     */
    where?: RoomParticipantWhereInput
    /**
     * Limit how many RoomParticipants to delete.
     */
    limit?: number
  }

  /**
   * RoomParticipant without action
   */
  export type RoomParticipantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomParticipant
     */
    select?: RoomParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomParticipant
     */
    omit?: RoomParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomParticipantInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    content: string | null
    senderId: string | null
    roomId: string | null
    createdAt: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    content: string | null
    senderId: string | null
    roomId: string | null
    createdAt: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    content: number
    senderId: number
    roomId: number
    createdAt: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    content?: true
    senderId?: true
    roomId?: true
    createdAt?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    content?: true
    senderId?: true
    roomId?: true
    createdAt?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    content?: true
    senderId?: true
    roomId?: true
    createdAt?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    content: string
    senderId: string
    roomId: string
    createdAt: Date
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    senderId?: boolean
    roomId?: boolean
    createdAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    senderId?: boolean
    roomId?: boolean
    createdAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    senderId?: boolean
    roomId?: boolean
    createdAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    content?: boolean
    senderId?: boolean
    roomId?: boolean
    createdAt?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "senderId" | "roomId" | "createdAt", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
      room: Prisma.$RoomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      senderId: string
      roomId: string
      createdAt: Date
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly content: FieldRef<"Message", 'String'>
    readonly senderId: FieldRef<"Message", 'String'>
    readonly roomId: FieldRef<"Message", 'String'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model MessageWithFreinds
   */

  export type AggregateMessageWithFreinds = {
    _count: MessageWithFreindsCountAggregateOutputType | null
    _min: MessageWithFreindsMinAggregateOutputType | null
    _max: MessageWithFreindsMaxAggregateOutputType | null
  }

  export type MessageWithFreindsMinAggregateOutputType = {
    id: string | null
    content: string | null
    type: $Enums.MessageType | null
    senderId: string | null
    receiverId: string | null
    createdAt: Date | null
  }

  export type MessageWithFreindsMaxAggregateOutputType = {
    id: string | null
    content: string | null
    type: $Enums.MessageType | null
    senderId: string | null
    receiverId: string | null
    createdAt: Date | null
  }

  export type MessageWithFreindsCountAggregateOutputType = {
    id: number
    content: number
    type: number
    senderId: number
    receiverId: number
    createdAt: number
    _all: number
  }


  export type MessageWithFreindsMinAggregateInputType = {
    id?: true
    content?: true
    type?: true
    senderId?: true
    receiverId?: true
    createdAt?: true
  }

  export type MessageWithFreindsMaxAggregateInputType = {
    id?: true
    content?: true
    type?: true
    senderId?: true
    receiverId?: true
    createdAt?: true
  }

  export type MessageWithFreindsCountAggregateInputType = {
    id?: true
    content?: true
    type?: true
    senderId?: true
    receiverId?: true
    createdAt?: true
    _all?: true
  }

  export type MessageWithFreindsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageWithFreinds to aggregate.
     */
    where?: MessageWithFreindsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageWithFreinds to fetch.
     */
    orderBy?: MessageWithFreindsOrderByWithRelationInput | MessageWithFreindsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWithFreindsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageWithFreinds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageWithFreinds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MessageWithFreinds
    **/
    _count?: true | MessageWithFreindsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageWithFreindsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageWithFreindsMaxAggregateInputType
  }

  export type GetMessageWithFreindsAggregateType<T extends MessageWithFreindsAggregateArgs> = {
        [P in keyof T & keyof AggregateMessageWithFreinds]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessageWithFreinds[P]>
      : GetScalarType<T[P], AggregateMessageWithFreinds[P]>
  }




  export type MessageWithFreindsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWithFreindsWhereInput
    orderBy?: MessageWithFreindsOrderByWithAggregationInput | MessageWithFreindsOrderByWithAggregationInput[]
    by: MessageWithFreindsScalarFieldEnum[] | MessageWithFreindsScalarFieldEnum
    having?: MessageWithFreindsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageWithFreindsCountAggregateInputType | true
    _min?: MessageWithFreindsMinAggregateInputType
    _max?: MessageWithFreindsMaxAggregateInputType
  }

  export type MessageWithFreindsGroupByOutputType = {
    id: string
    content: string
    type: $Enums.MessageType
    senderId: string
    receiverId: string
    createdAt: Date
    _count: MessageWithFreindsCountAggregateOutputType | null
    _min: MessageWithFreindsMinAggregateOutputType | null
    _max: MessageWithFreindsMaxAggregateOutputType | null
  }

  type GetMessageWithFreindsGroupByPayload<T extends MessageWithFreindsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageWithFreindsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageWithFreindsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageWithFreindsGroupByOutputType[P]>
            : GetScalarType<T[P], MessageWithFreindsGroupByOutputType[P]>
        }
      >
    >


  export type MessageWithFreindsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    type?: boolean
    senderId?: boolean
    receiverId?: boolean
    createdAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageWithFreinds"]>

  export type MessageWithFreindsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    type?: boolean
    senderId?: boolean
    receiverId?: boolean
    createdAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageWithFreinds"]>

  export type MessageWithFreindsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    type?: boolean
    senderId?: boolean
    receiverId?: boolean
    createdAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageWithFreinds"]>

  export type MessageWithFreindsSelectScalar = {
    id?: boolean
    content?: boolean
    type?: boolean
    senderId?: boolean
    receiverId?: boolean
    createdAt?: boolean
  }

  export type MessageWithFreindsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "type" | "senderId" | "receiverId" | "createdAt", ExtArgs["result"]["messageWithFreinds"]>
  export type MessageWithFreindsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageWithFreindsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageWithFreindsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MessageWithFreindsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MessageWithFreinds"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
      receiver: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      type: $Enums.MessageType
      senderId: string
      receiverId: string
      createdAt: Date
    }, ExtArgs["result"]["messageWithFreinds"]>
    composites: {}
  }

  type MessageWithFreindsGetPayload<S extends boolean | null | undefined | MessageWithFreindsDefaultArgs> = $Result.GetResult<Prisma.$MessageWithFreindsPayload, S>

  type MessageWithFreindsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageWithFreindsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageWithFreindsCountAggregateInputType | true
    }

  export interface MessageWithFreindsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MessageWithFreinds'], meta: { name: 'MessageWithFreinds' } }
    /**
     * Find zero or one MessageWithFreinds that matches the filter.
     * @param {MessageWithFreindsFindUniqueArgs} args - Arguments to find a MessageWithFreinds
     * @example
     * // Get one MessageWithFreinds
     * const messageWithFreinds = await prisma.messageWithFreinds.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageWithFreindsFindUniqueArgs>(args: SelectSubset<T, MessageWithFreindsFindUniqueArgs<ExtArgs>>): Prisma__MessageWithFreindsClient<$Result.GetResult<Prisma.$MessageWithFreindsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MessageWithFreinds that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageWithFreindsFindUniqueOrThrowArgs} args - Arguments to find a MessageWithFreinds
     * @example
     * // Get one MessageWithFreinds
     * const messageWithFreinds = await prisma.messageWithFreinds.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageWithFreindsFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageWithFreindsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageWithFreindsClient<$Result.GetResult<Prisma.$MessageWithFreindsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MessageWithFreinds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageWithFreindsFindFirstArgs} args - Arguments to find a MessageWithFreinds
     * @example
     * // Get one MessageWithFreinds
     * const messageWithFreinds = await prisma.messageWithFreinds.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageWithFreindsFindFirstArgs>(args?: SelectSubset<T, MessageWithFreindsFindFirstArgs<ExtArgs>>): Prisma__MessageWithFreindsClient<$Result.GetResult<Prisma.$MessageWithFreindsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MessageWithFreinds that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageWithFreindsFindFirstOrThrowArgs} args - Arguments to find a MessageWithFreinds
     * @example
     * // Get one MessageWithFreinds
     * const messageWithFreinds = await prisma.messageWithFreinds.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageWithFreindsFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageWithFreindsFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageWithFreindsClient<$Result.GetResult<Prisma.$MessageWithFreindsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MessageWithFreinds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageWithFreindsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MessageWithFreinds
     * const messageWithFreinds = await prisma.messageWithFreinds.findMany()
     * 
     * // Get first 10 MessageWithFreinds
     * const messageWithFreinds = await prisma.messageWithFreinds.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithFreindsWithIdOnly = await prisma.messageWithFreinds.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageWithFreindsFindManyArgs>(args?: SelectSubset<T, MessageWithFreindsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageWithFreindsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MessageWithFreinds.
     * @param {MessageWithFreindsCreateArgs} args - Arguments to create a MessageWithFreinds.
     * @example
     * // Create one MessageWithFreinds
     * const MessageWithFreinds = await prisma.messageWithFreinds.create({
     *   data: {
     *     // ... data to create a MessageWithFreinds
     *   }
     * })
     * 
     */
    create<T extends MessageWithFreindsCreateArgs>(args: SelectSubset<T, MessageWithFreindsCreateArgs<ExtArgs>>): Prisma__MessageWithFreindsClient<$Result.GetResult<Prisma.$MessageWithFreindsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MessageWithFreinds.
     * @param {MessageWithFreindsCreateManyArgs} args - Arguments to create many MessageWithFreinds.
     * @example
     * // Create many MessageWithFreinds
     * const messageWithFreinds = await prisma.messageWithFreinds.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageWithFreindsCreateManyArgs>(args?: SelectSubset<T, MessageWithFreindsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MessageWithFreinds and returns the data saved in the database.
     * @param {MessageWithFreindsCreateManyAndReturnArgs} args - Arguments to create many MessageWithFreinds.
     * @example
     * // Create many MessageWithFreinds
     * const messageWithFreinds = await prisma.messageWithFreinds.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MessageWithFreinds and only return the `id`
     * const messageWithFreindsWithIdOnly = await prisma.messageWithFreinds.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageWithFreindsCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageWithFreindsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageWithFreindsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MessageWithFreinds.
     * @param {MessageWithFreindsDeleteArgs} args - Arguments to delete one MessageWithFreinds.
     * @example
     * // Delete one MessageWithFreinds
     * const MessageWithFreinds = await prisma.messageWithFreinds.delete({
     *   where: {
     *     // ... filter to delete one MessageWithFreinds
     *   }
     * })
     * 
     */
    delete<T extends MessageWithFreindsDeleteArgs>(args: SelectSubset<T, MessageWithFreindsDeleteArgs<ExtArgs>>): Prisma__MessageWithFreindsClient<$Result.GetResult<Prisma.$MessageWithFreindsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MessageWithFreinds.
     * @param {MessageWithFreindsUpdateArgs} args - Arguments to update one MessageWithFreinds.
     * @example
     * // Update one MessageWithFreinds
     * const messageWithFreinds = await prisma.messageWithFreinds.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageWithFreindsUpdateArgs>(args: SelectSubset<T, MessageWithFreindsUpdateArgs<ExtArgs>>): Prisma__MessageWithFreindsClient<$Result.GetResult<Prisma.$MessageWithFreindsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MessageWithFreinds.
     * @param {MessageWithFreindsDeleteManyArgs} args - Arguments to filter MessageWithFreinds to delete.
     * @example
     * // Delete a few MessageWithFreinds
     * const { count } = await prisma.messageWithFreinds.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageWithFreindsDeleteManyArgs>(args?: SelectSubset<T, MessageWithFreindsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessageWithFreinds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageWithFreindsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MessageWithFreinds
     * const messageWithFreinds = await prisma.messageWithFreinds.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageWithFreindsUpdateManyArgs>(args: SelectSubset<T, MessageWithFreindsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessageWithFreinds and returns the data updated in the database.
     * @param {MessageWithFreindsUpdateManyAndReturnArgs} args - Arguments to update many MessageWithFreinds.
     * @example
     * // Update many MessageWithFreinds
     * const messageWithFreinds = await prisma.messageWithFreinds.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MessageWithFreinds and only return the `id`
     * const messageWithFreindsWithIdOnly = await prisma.messageWithFreinds.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageWithFreindsUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageWithFreindsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageWithFreindsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MessageWithFreinds.
     * @param {MessageWithFreindsUpsertArgs} args - Arguments to update or create a MessageWithFreinds.
     * @example
     * // Update or create a MessageWithFreinds
     * const messageWithFreinds = await prisma.messageWithFreinds.upsert({
     *   create: {
     *     // ... data to create a MessageWithFreinds
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MessageWithFreinds we want to update
     *   }
     * })
     */
    upsert<T extends MessageWithFreindsUpsertArgs>(args: SelectSubset<T, MessageWithFreindsUpsertArgs<ExtArgs>>): Prisma__MessageWithFreindsClient<$Result.GetResult<Prisma.$MessageWithFreindsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MessageWithFreinds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageWithFreindsCountArgs} args - Arguments to filter MessageWithFreinds to count.
     * @example
     * // Count the number of MessageWithFreinds
     * const count = await prisma.messageWithFreinds.count({
     *   where: {
     *     // ... the filter for the MessageWithFreinds we want to count
     *   }
     * })
    **/
    count<T extends MessageWithFreindsCountArgs>(
      args?: Subset<T, MessageWithFreindsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageWithFreindsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MessageWithFreinds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageWithFreindsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageWithFreindsAggregateArgs>(args: Subset<T, MessageWithFreindsAggregateArgs>): Prisma.PrismaPromise<GetMessageWithFreindsAggregateType<T>>

    /**
     * Group by MessageWithFreinds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageWithFreindsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageWithFreindsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageWithFreindsGroupByArgs['orderBy'] }
        : { orderBy?: MessageWithFreindsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageWithFreindsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageWithFreindsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MessageWithFreinds model
   */
  readonly fields: MessageWithFreindsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MessageWithFreinds.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageWithFreindsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MessageWithFreinds model
   */
  interface MessageWithFreindsFieldRefs {
    readonly id: FieldRef<"MessageWithFreinds", 'String'>
    readonly content: FieldRef<"MessageWithFreinds", 'String'>
    readonly type: FieldRef<"MessageWithFreinds", 'MessageType'>
    readonly senderId: FieldRef<"MessageWithFreinds", 'String'>
    readonly receiverId: FieldRef<"MessageWithFreinds", 'String'>
    readonly createdAt: FieldRef<"MessageWithFreinds", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MessageWithFreinds findUnique
   */
  export type MessageWithFreindsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageWithFreinds
     */
    select?: MessageWithFreindsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageWithFreinds
     */
    omit?: MessageWithFreindsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageWithFreindsInclude<ExtArgs> | null
    /**
     * Filter, which MessageWithFreinds to fetch.
     */
    where: MessageWithFreindsWhereUniqueInput
  }

  /**
   * MessageWithFreinds findUniqueOrThrow
   */
  export type MessageWithFreindsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageWithFreinds
     */
    select?: MessageWithFreindsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageWithFreinds
     */
    omit?: MessageWithFreindsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageWithFreindsInclude<ExtArgs> | null
    /**
     * Filter, which MessageWithFreinds to fetch.
     */
    where: MessageWithFreindsWhereUniqueInput
  }

  /**
   * MessageWithFreinds findFirst
   */
  export type MessageWithFreindsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageWithFreinds
     */
    select?: MessageWithFreindsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageWithFreinds
     */
    omit?: MessageWithFreindsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageWithFreindsInclude<ExtArgs> | null
    /**
     * Filter, which MessageWithFreinds to fetch.
     */
    where?: MessageWithFreindsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageWithFreinds to fetch.
     */
    orderBy?: MessageWithFreindsOrderByWithRelationInput | MessageWithFreindsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageWithFreinds.
     */
    cursor?: MessageWithFreindsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageWithFreinds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageWithFreinds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageWithFreinds.
     */
    distinct?: MessageWithFreindsScalarFieldEnum | MessageWithFreindsScalarFieldEnum[]
  }

  /**
   * MessageWithFreinds findFirstOrThrow
   */
  export type MessageWithFreindsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageWithFreinds
     */
    select?: MessageWithFreindsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageWithFreinds
     */
    omit?: MessageWithFreindsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageWithFreindsInclude<ExtArgs> | null
    /**
     * Filter, which MessageWithFreinds to fetch.
     */
    where?: MessageWithFreindsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageWithFreinds to fetch.
     */
    orderBy?: MessageWithFreindsOrderByWithRelationInput | MessageWithFreindsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageWithFreinds.
     */
    cursor?: MessageWithFreindsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageWithFreinds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageWithFreinds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageWithFreinds.
     */
    distinct?: MessageWithFreindsScalarFieldEnum | MessageWithFreindsScalarFieldEnum[]
  }

  /**
   * MessageWithFreinds findMany
   */
  export type MessageWithFreindsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageWithFreinds
     */
    select?: MessageWithFreindsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageWithFreinds
     */
    omit?: MessageWithFreindsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageWithFreindsInclude<ExtArgs> | null
    /**
     * Filter, which MessageWithFreinds to fetch.
     */
    where?: MessageWithFreindsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageWithFreinds to fetch.
     */
    orderBy?: MessageWithFreindsOrderByWithRelationInput | MessageWithFreindsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MessageWithFreinds.
     */
    cursor?: MessageWithFreindsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageWithFreinds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageWithFreinds.
     */
    skip?: number
    distinct?: MessageWithFreindsScalarFieldEnum | MessageWithFreindsScalarFieldEnum[]
  }

  /**
   * MessageWithFreinds create
   */
  export type MessageWithFreindsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageWithFreinds
     */
    select?: MessageWithFreindsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageWithFreinds
     */
    omit?: MessageWithFreindsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageWithFreindsInclude<ExtArgs> | null
    /**
     * The data needed to create a MessageWithFreinds.
     */
    data: XOR<MessageWithFreindsCreateInput, MessageWithFreindsUncheckedCreateInput>
  }

  /**
   * MessageWithFreinds createMany
   */
  export type MessageWithFreindsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MessageWithFreinds.
     */
    data: MessageWithFreindsCreateManyInput | MessageWithFreindsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MessageWithFreinds createManyAndReturn
   */
  export type MessageWithFreindsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageWithFreinds
     */
    select?: MessageWithFreindsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MessageWithFreinds
     */
    omit?: MessageWithFreindsOmit<ExtArgs> | null
    /**
     * The data used to create many MessageWithFreinds.
     */
    data: MessageWithFreindsCreateManyInput | MessageWithFreindsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageWithFreindsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MessageWithFreinds update
   */
  export type MessageWithFreindsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageWithFreinds
     */
    select?: MessageWithFreindsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageWithFreinds
     */
    omit?: MessageWithFreindsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageWithFreindsInclude<ExtArgs> | null
    /**
     * The data needed to update a MessageWithFreinds.
     */
    data: XOR<MessageWithFreindsUpdateInput, MessageWithFreindsUncheckedUpdateInput>
    /**
     * Choose, which MessageWithFreinds to update.
     */
    where: MessageWithFreindsWhereUniqueInput
  }

  /**
   * MessageWithFreinds updateMany
   */
  export type MessageWithFreindsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MessageWithFreinds.
     */
    data: XOR<MessageWithFreindsUpdateManyMutationInput, MessageWithFreindsUncheckedUpdateManyInput>
    /**
     * Filter which MessageWithFreinds to update
     */
    where?: MessageWithFreindsWhereInput
    /**
     * Limit how many MessageWithFreinds to update.
     */
    limit?: number
  }

  /**
   * MessageWithFreinds updateManyAndReturn
   */
  export type MessageWithFreindsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageWithFreinds
     */
    select?: MessageWithFreindsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MessageWithFreinds
     */
    omit?: MessageWithFreindsOmit<ExtArgs> | null
    /**
     * The data used to update MessageWithFreinds.
     */
    data: XOR<MessageWithFreindsUpdateManyMutationInput, MessageWithFreindsUncheckedUpdateManyInput>
    /**
     * Filter which MessageWithFreinds to update
     */
    where?: MessageWithFreindsWhereInput
    /**
     * Limit how many MessageWithFreinds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageWithFreindsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MessageWithFreinds upsert
   */
  export type MessageWithFreindsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageWithFreinds
     */
    select?: MessageWithFreindsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageWithFreinds
     */
    omit?: MessageWithFreindsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageWithFreindsInclude<ExtArgs> | null
    /**
     * The filter to search for the MessageWithFreinds to update in case it exists.
     */
    where: MessageWithFreindsWhereUniqueInput
    /**
     * In case the MessageWithFreinds found by the `where` argument doesn't exist, create a new MessageWithFreinds with this data.
     */
    create: XOR<MessageWithFreindsCreateInput, MessageWithFreindsUncheckedCreateInput>
    /**
     * In case the MessageWithFreinds was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageWithFreindsUpdateInput, MessageWithFreindsUncheckedUpdateInput>
  }

  /**
   * MessageWithFreinds delete
   */
  export type MessageWithFreindsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageWithFreinds
     */
    select?: MessageWithFreindsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageWithFreinds
     */
    omit?: MessageWithFreindsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageWithFreindsInclude<ExtArgs> | null
    /**
     * Filter which MessageWithFreinds to delete.
     */
    where: MessageWithFreindsWhereUniqueInput
  }

  /**
   * MessageWithFreinds deleteMany
   */
  export type MessageWithFreindsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageWithFreinds to delete
     */
    where?: MessageWithFreindsWhereInput
    /**
     * Limit how many MessageWithFreinds to delete.
     */
    limit?: number
  }

  /**
   * MessageWithFreinds without action
   */
  export type MessageWithFreindsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageWithFreinds
     */
    select?: MessageWithFreindsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageWithFreinds
     */
    omit?: MessageWithFreindsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageWithFreindsInclude<ExtArgs> | null
  }


  /**
   * Model AITranscript
   */

  export type AggregateAITranscript = {
    _count: AITranscriptCountAggregateOutputType | null
    _min: AITranscriptMinAggregateOutputType | null
    _max: AITranscriptMaxAggregateOutputType | null
  }

  export type AITranscriptMinAggregateOutputType = {
    id: string | null
    roomId: string | null
    userId: string | null
    text: string | null
    lang: string | null
    isTranslated: boolean | null
    translatedText: string | null
    createdAt: Date | null
  }

  export type AITranscriptMaxAggregateOutputType = {
    id: string | null
    roomId: string | null
    userId: string | null
    text: string | null
    lang: string | null
    isTranslated: boolean | null
    translatedText: string | null
    createdAt: Date | null
  }

  export type AITranscriptCountAggregateOutputType = {
    id: number
    roomId: number
    userId: number
    text: number
    lang: number
    isTranslated: number
    translatedText: number
    createdAt: number
    _all: number
  }


  export type AITranscriptMinAggregateInputType = {
    id?: true
    roomId?: true
    userId?: true
    text?: true
    lang?: true
    isTranslated?: true
    translatedText?: true
    createdAt?: true
  }

  export type AITranscriptMaxAggregateInputType = {
    id?: true
    roomId?: true
    userId?: true
    text?: true
    lang?: true
    isTranslated?: true
    translatedText?: true
    createdAt?: true
  }

  export type AITranscriptCountAggregateInputType = {
    id?: true
    roomId?: true
    userId?: true
    text?: true
    lang?: true
    isTranslated?: true
    translatedText?: true
    createdAt?: true
    _all?: true
  }

  export type AITranscriptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AITranscript to aggregate.
     */
    where?: AITranscriptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AITranscripts to fetch.
     */
    orderBy?: AITranscriptOrderByWithRelationInput | AITranscriptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AITranscriptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AITranscripts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AITranscripts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AITranscripts
    **/
    _count?: true | AITranscriptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AITranscriptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AITranscriptMaxAggregateInputType
  }

  export type GetAITranscriptAggregateType<T extends AITranscriptAggregateArgs> = {
        [P in keyof T & keyof AggregateAITranscript]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAITranscript[P]>
      : GetScalarType<T[P], AggregateAITranscript[P]>
  }




  export type AITranscriptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AITranscriptWhereInput
    orderBy?: AITranscriptOrderByWithAggregationInput | AITranscriptOrderByWithAggregationInput[]
    by: AITranscriptScalarFieldEnum[] | AITranscriptScalarFieldEnum
    having?: AITranscriptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AITranscriptCountAggregateInputType | true
    _min?: AITranscriptMinAggregateInputType
    _max?: AITranscriptMaxAggregateInputType
  }

  export type AITranscriptGroupByOutputType = {
    id: string
    roomId: string
    userId: string
    text: string
    lang: string
    isTranslated: boolean
    translatedText: string | null
    createdAt: Date
    _count: AITranscriptCountAggregateOutputType | null
    _min: AITranscriptMinAggregateOutputType | null
    _max: AITranscriptMaxAggregateOutputType | null
  }

  type GetAITranscriptGroupByPayload<T extends AITranscriptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AITranscriptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AITranscriptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AITranscriptGroupByOutputType[P]>
            : GetScalarType<T[P], AITranscriptGroupByOutputType[P]>
        }
      >
    >


  export type AITranscriptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    userId?: boolean
    text?: boolean
    lang?: boolean
    isTranslated?: boolean
    translatedText?: boolean
    createdAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aITranscript"]>

  export type AITranscriptSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    userId?: boolean
    text?: boolean
    lang?: boolean
    isTranslated?: boolean
    translatedText?: boolean
    createdAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aITranscript"]>

  export type AITranscriptSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    userId?: boolean
    text?: boolean
    lang?: boolean
    isTranslated?: boolean
    translatedText?: boolean
    createdAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aITranscript"]>

  export type AITranscriptSelectScalar = {
    id?: boolean
    roomId?: boolean
    userId?: boolean
    text?: boolean
    lang?: boolean
    isTranslated?: boolean
    translatedText?: boolean
    createdAt?: boolean
  }

  export type AITranscriptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roomId" | "userId" | "text" | "lang" | "isTranslated" | "translatedText" | "createdAt", ExtArgs["result"]["aITranscript"]>
  export type AITranscriptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AITranscriptIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AITranscriptIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AITranscriptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AITranscript"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      roomId: string
      userId: string
      text: string
      lang: string
      isTranslated: boolean
      translatedText: string | null
      createdAt: Date
    }, ExtArgs["result"]["aITranscript"]>
    composites: {}
  }

  type AITranscriptGetPayload<S extends boolean | null | undefined | AITranscriptDefaultArgs> = $Result.GetResult<Prisma.$AITranscriptPayload, S>

  type AITranscriptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AITranscriptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AITranscriptCountAggregateInputType | true
    }

  export interface AITranscriptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AITranscript'], meta: { name: 'AITranscript' } }
    /**
     * Find zero or one AITranscript that matches the filter.
     * @param {AITranscriptFindUniqueArgs} args - Arguments to find a AITranscript
     * @example
     * // Get one AITranscript
     * const aITranscript = await prisma.aITranscript.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AITranscriptFindUniqueArgs>(args: SelectSubset<T, AITranscriptFindUniqueArgs<ExtArgs>>): Prisma__AITranscriptClient<$Result.GetResult<Prisma.$AITranscriptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AITranscript that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AITranscriptFindUniqueOrThrowArgs} args - Arguments to find a AITranscript
     * @example
     * // Get one AITranscript
     * const aITranscript = await prisma.aITranscript.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AITranscriptFindUniqueOrThrowArgs>(args: SelectSubset<T, AITranscriptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AITranscriptClient<$Result.GetResult<Prisma.$AITranscriptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AITranscript that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AITranscriptFindFirstArgs} args - Arguments to find a AITranscript
     * @example
     * // Get one AITranscript
     * const aITranscript = await prisma.aITranscript.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AITranscriptFindFirstArgs>(args?: SelectSubset<T, AITranscriptFindFirstArgs<ExtArgs>>): Prisma__AITranscriptClient<$Result.GetResult<Prisma.$AITranscriptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AITranscript that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AITranscriptFindFirstOrThrowArgs} args - Arguments to find a AITranscript
     * @example
     * // Get one AITranscript
     * const aITranscript = await prisma.aITranscript.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AITranscriptFindFirstOrThrowArgs>(args?: SelectSubset<T, AITranscriptFindFirstOrThrowArgs<ExtArgs>>): Prisma__AITranscriptClient<$Result.GetResult<Prisma.$AITranscriptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AITranscripts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AITranscriptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AITranscripts
     * const aITranscripts = await prisma.aITranscript.findMany()
     * 
     * // Get first 10 AITranscripts
     * const aITranscripts = await prisma.aITranscript.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aITranscriptWithIdOnly = await prisma.aITranscript.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AITranscriptFindManyArgs>(args?: SelectSubset<T, AITranscriptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AITranscriptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AITranscript.
     * @param {AITranscriptCreateArgs} args - Arguments to create a AITranscript.
     * @example
     * // Create one AITranscript
     * const AITranscript = await prisma.aITranscript.create({
     *   data: {
     *     // ... data to create a AITranscript
     *   }
     * })
     * 
     */
    create<T extends AITranscriptCreateArgs>(args: SelectSubset<T, AITranscriptCreateArgs<ExtArgs>>): Prisma__AITranscriptClient<$Result.GetResult<Prisma.$AITranscriptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AITranscripts.
     * @param {AITranscriptCreateManyArgs} args - Arguments to create many AITranscripts.
     * @example
     * // Create many AITranscripts
     * const aITranscript = await prisma.aITranscript.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AITranscriptCreateManyArgs>(args?: SelectSubset<T, AITranscriptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AITranscripts and returns the data saved in the database.
     * @param {AITranscriptCreateManyAndReturnArgs} args - Arguments to create many AITranscripts.
     * @example
     * // Create many AITranscripts
     * const aITranscript = await prisma.aITranscript.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AITranscripts and only return the `id`
     * const aITranscriptWithIdOnly = await prisma.aITranscript.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AITranscriptCreateManyAndReturnArgs>(args?: SelectSubset<T, AITranscriptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AITranscriptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AITranscript.
     * @param {AITranscriptDeleteArgs} args - Arguments to delete one AITranscript.
     * @example
     * // Delete one AITranscript
     * const AITranscript = await prisma.aITranscript.delete({
     *   where: {
     *     // ... filter to delete one AITranscript
     *   }
     * })
     * 
     */
    delete<T extends AITranscriptDeleteArgs>(args: SelectSubset<T, AITranscriptDeleteArgs<ExtArgs>>): Prisma__AITranscriptClient<$Result.GetResult<Prisma.$AITranscriptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AITranscript.
     * @param {AITranscriptUpdateArgs} args - Arguments to update one AITranscript.
     * @example
     * // Update one AITranscript
     * const aITranscript = await prisma.aITranscript.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AITranscriptUpdateArgs>(args: SelectSubset<T, AITranscriptUpdateArgs<ExtArgs>>): Prisma__AITranscriptClient<$Result.GetResult<Prisma.$AITranscriptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AITranscripts.
     * @param {AITranscriptDeleteManyArgs} args - Arguments to filter AITranscripts to delete.
     * @example
     * // Delete a few AITranscripts
     * const { count } = await prisma.aITranscript.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AITranscriptDeleteManyArgs>(args?: SelectSubset<T, AITranscriptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AITranscripts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AITranscriptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AITranscripts
     * const aITranscript = await prisma.aITranscript.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AITranscriptUpdateManyArgs>(args: SelectSubset<T, AITranscriptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AITranscripts and returns the data updated in the database.
     * @param {AITranscriptUpdateManyAndReturnArgs} args - Arguments to update many AITranscripts.
     * @example
     * // Update many AITranscripts
     * const aITranscript = await prisma.aITranscript.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AITranscripts and only return the `id`
     * const aITranscriptWithIdOnly = await prisma.aITranscript.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AITranscriptUpdateManyAndReturnArgs>(args: SelectSubset<T, AITranscriptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AITranscriptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AITranscript.
     * @param {AITranscriptUpsertArgs} args - Arguments to update or create a AITranscript.
     * @example
     * // Update or create a AITranscript
     * const aITranscript = await prisma.aITranscript.upsert({
     *   create: {
     *     // ... data to create a AITranscript
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AITranscript we want to update
     *   }
     * })
     */
    upsert<T extends AITranscriptUpsertArgs>(args: SelectSubset<T, AITranscriptUpsertArgs<ExtArgs>>): Prisma__AITranscriptClient<$Result.GetResult<Prisma.$AITranscriptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AITranscripts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AITranscriptCountArgs} args - Arguments to filter AITranscripts to count.
     * @example
     * // Count the number of AITranscripts
     * const count = await prisma.aITranscript.count({
     *   where: {
     *     // ... the filter for the AITranscripts we want to count
     *   }
     * })
    **/
    count<T extends AITranscriptCountArgs>(
      args?: Subset<T, AITranscriptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AITranscriptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AITranscript.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AITranscriptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AITranscriptAggregateArgs>(args: Subset<T, AITranscriptAggregateArgs>): Prisma.PrismaPromise<GetAITranscriptAggregateType<T>>

    /**
     * Group by AITranscript.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AITranscriptGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AITranscriptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AITranscriptGroupByArgs['orderBy'] }
        : { orderBy?: AITranscriptGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AITranscriptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAITranscriptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AITranscript model
   */
  readonly fields: AITranscriptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AITranscript.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AITranscriptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AITranscript model
   */
  interface AITranscriptFieldRefs {
    readonly id: FieldRef<"AITranscript", 'String'>
    readonly roomId: FieldRef<"AITranscript", 'String'>
    readonly userId: FieldRef<"AITranscript", 'String'>
    readonly text: FieldRef<"AITranscript", 'String'>
    readonly lang: FieldRef<"AITranscript", 'String'>
    readonly isTranslated: FieldRef<"AITranscript", 'Boolean'>
    readonly translatedText: FieldRef<"AITranscript", 'String'>
    readonly createdAt: FieldRef<"AITranscript", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AITranscript findUnique
   */
  export type AITranscriptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AITranscript
     */
    select?: AITranscriptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AITranscript
     */
    omit?: AITranscriptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AITranscriptInclude<ExtArgs> | null
    /**
     * Filter, which AITranscript to fetch.
     */
    where: AITranscriptWhereUniqueInput
  }

  /**
   * AITranscript findUniqueOrThrow
   */
  export type AITranscriptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AITranscript
     */
    select?: AITranscriptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AITranscript
     */
    omit?: AITranscriptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AITranscriptInclude<ExtArgs> | null
    /**
     * Filter, which AITranscript to fetch.
     */
    where: AITranscriptWhereUniqueInput
  }

  /**
   * AITranscript findFirst
   */
  export type AITranscriptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AITranscript
     */
    select?: AITranscriptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AITranscript
     */
    omit?: AITranscriptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AITranscriptInclude<ExtArgs> | null
    /**
     * Filter, which AITranscript to fetch.
     */
    where?: AITranscriptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AITranscripts to fetch.
     */
    orderBy?: AITranscriptOrderByWithRelationInput | AITranscriptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AITranscripts.
     */
    cursor?: AITranscriptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AITranscripts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AITranscripts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AITranscripts.
     */
    distinct?: AITranscriptScalarFieldEnum | AITranscriptScalarFieldEnum[]
  }

  /**
   * AITranscript findFirstOrThrow
   */
  export type AITranscriptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AITranscript
     */
    select?: AITranscriptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AITranscript
     */
    omit?: AITranscriptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AITranscriptInclude<ExtArgs> | null
    /**
     * Filter, which AITranscript to fetch.
     */
    where?: AITranscriptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AITranscripts to fetch.
     */
    orderBy?: AITranscriptOrderByWithRelationInput | AITranscriptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AITranscripts.
     */
    cursor?: AITranscriptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AITranscripts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AITranscripts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AITranscripts.
     */
    distinct?: AITranscriptScalarFieldEnum | AITranscriptScalarFieldEnum[]
  }

  /**
   * AITranscript findMany
   */
  export type AITranscriptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AITranscript
     */
    select?: AITranscriptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AITranscript
     */
    omit?: AITranscriptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AITranscriptInclude<ExtArgs> | null
    /**
     * Filter, which AITranscripts to fetch.
     */
    where?: AITranscriptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AITranscripts to fetch.
     */
    orderBy?: AITranscriptOrderByWithRelationInput | AITranscriptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AITranscripts.
     */
    cursor?: AITranscriptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AITranscripts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AITranscripts.
     */
    skip?: number
    distinct?: AITranscriptScalarFieldEnum | AITranscriptScalarFieldEnum[]
  }

  /**
   * AITranscript create
   */
  export type AITranscriptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AITranscript
     */
    select?: AITranscriptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AITranscript
     */
    omit?: AITranscriptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AITranscriptInclude<ExtArgs> | null
    /**
     * The data needed to create a AITranscript.
     */
    data: XOR<AITranscriptCreateInput, AITranscriptUncheckedCreateInput>
  }

  /**
   * AITranscript createMany
   */
  export type AITranscriptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AITranscripts.
     */
    data: AITranscriptCreateManyInput | AITranscriptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AITranscript createManyAndReturn
   */
  export type AITranscriptCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AITranscript
     */
    select?: AITranscriptSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AITranscript
     */
    omit?: AITranscriptOmit<ExtArgs> | null
    /**
     * The data used to create many AITranscripts.
     */
    data: AITranscriptCreateManyInput | AITranscriptCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AITranscriptIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AITranscript update
   */
  export type AITranscriptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AITranscript
     */
    select?: AITranscriptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AITranscript
     */
    omit?: AITranscriptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AITranscriptInclude<ExtArgs> | null
    /**
     * The data needed to update a AITranscript.
     */
    data: XOR<AITranscriptUpdateInput, AITranscriptUncheckedUpdateInput>
    /**
     * Choose, which AITranscript to update.
     */
    where: AITranscriptWhereUniqueInput
  }

  /**
   * AITranscript updateMany
   */
  export type AITranscriptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AITranscripts.
     */
    data: XOR<AITranscriptUpdateManyMutationInput, AITranscriptUncheckedUpdateManyInput>
    /**
     * Filter which AITranscripts to update
     */
    where?: AITranscriptWhereInput
    /**
     * Limit how many AITranscripts to update.
     */
    limit?: number
  }

  /**
   * AITranscript updateManyAndReturn
   */
  export type AITranscriptUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AITranscript
     */
    select?: AITranscriptSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AITranscript
     */
    omit?: AITranscriptOmit<ExtArgs> | null
    /**
     * The data used to update AITranscripts.
     */
    data: XOR<AITranscriptUpdateManyMutationInput, AITranscriptUncheckedUpdateManyInput>
    /**
     * Filter which AITranscripts to update
     */
    where?: AITranscriptWhereInput
    /**
     * Limit how many AITranscripts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AITranscriptIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AITranscript upsert
   */
  export type AITranscriptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AITranscript
     */
    select?: AITranscriptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AITranscript
     */
    omit?: AITranscriptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AITranscriptInclude<ExtArgs> | null
    /**
     * The filter to search for the AITranscript to update in case it exists.
     */
    where: AITranscriptWhereUniqueInput
    /**
     * In case the AITranscript found by the `where` argument doesn't exist, create a new AITranscript with this data.
     */
    create: XOR<AITranscriptCreateInput, AITranscriptUncheckedCreateInput>
    /**
     * In case the AITranscript was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AITranscriptUpdateInput, AITranscriptUncheckedUpdateInput>
  }

  /**
   * AITranscript delete
   */
  export type AITranscriptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AITranscript
     */
    select?: AITranscriptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AITranscript
     */
    omit?: AITranscriptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AITranscriptInclude<ExtArgs> | null
    /**
     * Filter which AITranscript to delete.
     */
    where: AITranscriptWhereUniqueInput
  }

  /**
   * AITranscript deleteMany
   */
  export type AITranscriptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AITranscripts to delete
     */
    where?: AITranscriptWhereInput
    /**
     * Limit how many AITranscripts to delete.
     */
    limit?: number
  }

  /**
   * AITranscript without action
   */
  export type AITranscriptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AITranscript
     */
    select?: AITranscriptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AITranscript
     */
    omit?: AITranscriptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AITranscriptInclude<ExtArgs> | null
  }


  /**
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    plan: string | null
    startDate: Date | null
    endDate: Date | null
    razorpayId: string | null
    paymentStatus: string | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    plan: string | null
    startDate: Date | null
    endDate: Date | null
    razorpayId: string | null
    paymentStatus: string | null
  }

  export type SubscriptionCountAggregateOutputType = {
    id: number
    userId: number
    plan: number
    startDate: number
    endDate: number
    razorpayId: number
    paymentStatus: number
    _all: number
  }


  export type SubscriptionMinAggregateInputType = {
    id?: true
    userId?: true
    plan?: true
    startDate?: true
    endDate?: true
    razorpayId?: true
    paymentStatus?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    id?: true
    userId?: true
    plan?: true
    startDate?: true
    endDate?: true
    razorpayId?: true
    paymentStatus?: true
  }

  export type SubscriptionCountAggregateInputType = {
    id?: true
    userId?: true
    plan?: true
    startDate?: true
    endDate?: true
    razorpayId?: true
    paymentStatus?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type SubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithAggregationInput | SubscriptionOrderByWithAggregationInput[]
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    id: string
    userId: string
    plan: string
    startDate: Date
    endDate: Date
    razorpayId: string | null
    paymentStatus: string
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    plan?: boolean
    startDate?: boolean
    endDate?: boolean
    razorpayId?: boolean
    paymentStatus?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    plan?: boolean
    startDate?: boolean
    endDate?: boolean
    razorpayId?: boolean
    paymentStatus?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    plan?: boolean
    startDate?: boolean
    endDate?: boolean
    razorpayId?: boolean
    paymentStatus?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectScalar = {
    id?: boolean
    userId?: boolean
    plan?: boolean
    startDate?: boolean
    endDate?: boolean
    razorpayId?: boolean
    paymentStatus?: boolean
  }

  export type SubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "plan" | "startDate" | "endDate" | "razorpayId" | "paymentStatus", ExtArgs["result"]["subscription"]>
  export type SubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscription"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      plan: string
      startDate: Date
      endDate: Date
      razorpayId: string | null
      paymentStatus: string
    }, ExtArgs["result"]["subscription"]>
    composites: {}
  }

  type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPayload, S>

  type SubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface SubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscription'], meta: { name: 'Subscription' } }
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionFindUniqueArgs>(args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionFindFirstArgs>(args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionFindManyArgs>(args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
     */
    create<T extends SubscriptionCreateArgs>(args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscriptions.
     * @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionCreateManyArgs>(args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscriptions and returns the data saved in the database.
     * @param {SubscriptionCreateManyAndReturnArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionDeleteArgs>(args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionUpdateArgs>(args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionDeleteManyArgs>(args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionUpdateManyArgs>(args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions and returns the data updated in the database.
     * @param {SubscriptionUpdateManyAndReturnArgs} args - Arguments to update many Subscriptions.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUpsertArgs>(args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscription model
   */
  readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subscription model
   */
  interface SubscriptionFieldRefs {
    readonly id: FieldRef<"Subscription", 'String'>
    readonly userId: FieldRef<"Subscription", 'String'>
    readonly plan: FieldRef<"Subscription", 'String'>
    readonly startDate: FieldRef<"Subscription", 'DateTime'>
    readonly endDate: FieldRef<"Subscription", 'DateTime'>
    readonly razorpayId: FieldRef<"Subscription", 'String'>
    readonly paymentStatus: FieldRef<"Subscription", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }

  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscription createManyAndReturn
   */
  export type SubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
  }

  /**
   * Subscription updateManyAndReturn
   */
  export type SubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to delete.
     */
    limit?: number
  }

  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model Friendship
   */

  export type AggregateFriendship = {
    _count: FriendshipCountAggregateOutputType | null
    _min: FriendshipMinAggregateOutputType | null
    _max: FriendshipMaxAggregateOutputType | null
  }

  export type FriendshipMinAggregateOutputType = {
    id: string | null
    userId: string | null
    friendId: string | null
    createdAt: Date | null
  }

  export type FriendshipMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    friendId: string | null
    createdAt: Date | null
  }

  export type FriendshipCountAggregateOutputType = {
    id: number
    userId: number
    friendId: number
    createdAt: number
    _all: number
  }


  export type FriendshipMinAggregateInputType = {
    id?: true
    userId?: true
    friendId?: true
    createdAt?: true
  }

  export type FriendshipMaxAggregateInputType = {
    id?: true
    userId?: true
    friendId?: true
    createdAt?: true
  }

  export type FriendshipCountAggregateInputType = {
    id?: true
    userId?: true
    friendId?: true
    createdAt?: true
    _all?: true
  }

  export type FriendshipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Friendship to aggregate.
     */
    where?: FriendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friendships to fetch.
     */
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FriendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friendships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Friendships
    **/
    _count?: true | FriendshipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FriendshipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FriendshipMaxAggregateInputType
  }

  export type GetFriendshipAggregateType<T extends FriendshipAggregateArgs> = {
        [P in keyof T & keyof AggregateFriendship]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFriendship[P]>
      : GetScalarType<T[P], AggregateFriendship[P]>
  }




  export type FriendshipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendshipWhereInput
    orderBy?: FriendshipOrderByWithAggregationInput | FriendshipOrderByWithAggregationInput[]
    by: FriendshipScalarFieldEnum[] | FriendshipScalarFieldEnum
    having?: FriendshipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FriendshipCountAggregateInputType | true
    _min?: FriendshipMinAggregateInputType
    _max?: FriendshipMaxAggregateInputType
  }

  export type FriendshipGroupByOutputType = {
    id: string
    userId: string
    friendId: string
    createdAt: Date
    _count: FriendshipCountAggregateOutputType | null
    _min: FriendshipMinAggregateOutputType | null
    _max: FriendshipMaxAggregateOutputType | null
  }

  type GetFriendshipGroupByPayload<T extends FriendshipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FriendshipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FriendshipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FriendshipGroupByOutputType[P]>
            : GetScalarType<T[P], FriendshipGroupByOutputType[P]>
        }
      >
    >


  export type FriendshipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    friendId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    friend?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friendship"]>

  export type FriendshipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    friendId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    friend?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friendship"]>

  export type FriendshipSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    friendId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    friend?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friendship"]>

  export type FriendshipSelectScalar = {
    id?: boolean
    userId?: boolean
    friendId?: boolean
    createdAt?: boolean
  }

  export type FriendshipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "friendId" | "createdAt", ExtArgs["result"]["friendship"]>
  export type FriendshipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    friend?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FriendshipIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    friend?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FriendshipIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    friend?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FriendshipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Friendship"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      friend: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      friendId: string
      createdAt: Date
    }, ExtArgs["result"]["friendship"]>
    composites: {}
  }

  type FriendshipGetPayload<S extends boolean | null | undefined | FriendshipDefaultArgs> = $Result.GetResult<Prisma.$FriendshipPayload, S>

  type FriendshipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FriendshipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FriendshipCountAggregateInputType | true
    }

  export interface FriendshipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Friendship'], meta: { name: 'Friendship' } }
    /**
     * Find zero or one Friendship that matches the filter.
     * @param {FriendshipFindUniqueArgs} args - Arguments to find a Friendship
     * @example
     * // Get one Friendship
     * const friendship = await prisma.friendship.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FriendshipFindUniqueArgs>(args: SelectSubset<T, FriendshipFindUniqueArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Friendship that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FriendshipFindUniqueOrThrowArgs} args - Arguments to find a Friendship
     * @example
     * // Get one Friendship
     * const friendship = await prisma.friendship.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FriendshipFindUniqueOrThrowArgs>(args: SelectSubset<T, FriendshipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Friendship that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipFindFirstArgs} args - Arguments to find a Friendship
     * @example
     * // Get one Friendship
     * const friendship = await prisma.friendship.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FriendshipFindFirstArgs>(args?: SelectSubset<T, FriendshipFindFirstArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Friendship that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipFindFirstOrThrowArgs} args - Arguments to find a Friendship
     * @example
     * // Get one Friendship
     * const friendship = await prisma.friendship.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FriendshipFindFirstOrThrowArgs>(args?: SelectSubset<T, FriendshipFindFirstOrThrowArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Friendships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Friendships
     * const friendships = await prisma.friendship.findMany()
     * 
     * // Get first 10 Friendships
     * const friendships = await prisma.friendship.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const friendshipWithIdOnly = await prisma.friendship.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FriendshipFindManyArgs>(args?: SelectSubset<T, FriendshipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Friendship.
     * @param {FriendshipCreateArgs} args - Arguments to create a Friendship.
     * @example
     * // Create one Friendship
     * const Friendship = await prisma.friendship.create({
     *   data: {
     *     // ... data to create a Friendship
     *   }
     * })
     * 
     */
    create<T extends FriendshipCreateArgs>(args: SelectSubset<T, FriendshipCreateArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Friendships.
     * @param {FriendshipCreateManyArgs} args - Arguments to create many Friendships.
     * @example
     * // Create many Friendships
     * const friendship = await prisma.friendship.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FriendshipCreateManyArgs>(args?: SelectSubset<T, FriendshipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Friendships and returns the data saved in the database.
     * @param {FriendshipCreateManyAndReturnArgs} args - Arguments to create many Friendships.
     * @example
     * // Create many Friendships
     * const friendship = await prisma.friendship.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Friendships and only return the `id`
     * const friendshipWithIdOnly = await prisma.friendship.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FriendshipCreateManyAndReturnArgs>(args?: SelectSubset<T, FriendshipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Friendship.
     * @param {FriendshipDeleteArgs} args - Arguments to delete one Friendship.
     * @example
     * // Delete one Friendship
     * const Friendship = await prisma.friendship.delete({
     *   where: {
     *     // ... filter to delete one Friendship
     *   }
     * })
     * 
     */
    delete<T extends FriendshipDeleteArgs>(args: SelectSubset<T, FriendshipDeleteArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Friendship.
     * @param {FriendshipUpdateArgs} args - Arguments to update one Friendship.
     * @example
     * // Update one Friendship
     * const friendship = await prisma.friendship.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FriendshipUpdateArgs>(args: SelectSubset<T, FriendshipUpdateArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Friendships.
     * @param {FriendshipDeleteManyArgs} args - Arguments to filter Friendships to delete.
     * @example
     * // Delete a few Friendships
     * const { count } = await prisma.friendship.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FriendshipDeleteManyArgs>(args?: SelectSubset<T, FriendshipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Friendships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Friendships
     * const friendship = await prisma.friendship.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FriendshipUpdateManyArgs>(args: SelectSubset<T, FriendshipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Friendships and returns the data updated in the database.
     * @param {FriendshipUpdateManyAndReturnArgs} args - Arguments to update many Friendships.
     * @example
     * // Update many Friendships
     * const friendship = await prisma.friendship.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Friendships and only return the `id`
     * const friendshipWithIdOnly = await prisma.friendship.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FriendshipUpdateManyAndReturnArgs>(args: SelectSubset<T, FriendshipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Friendship.
     * @param {FriendshipUpsertArgs} args - Arguments to update or create a Friendship.
     * @example
     * // Update or create a Friendship
     * const friendship = await prisma.friendship.upsert({
     *   create: {
     *     // ... data to create a Friendship
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Friendship we want to update
     *   }
     * })
     */
    upsert<T extends FriendshipUpsertArgs>(args: SelectSubset<T, FriendshipUpsertArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Friendships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipCountArgs} args - Arguments to filter Friendships to count.
     * @example
     * // Count the number of Friendships
     * const count = await prisma.friendship.count({
     *   where: {
     *     // ... the filter for the Friendships we want to count
     *   }
     * })
    **/
    count<T extends FriendshipCountArgs>(
      args?: Subset<T, FriendshipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FriendshipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Friendship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FriendshipAggregateArgs>(args: Subset<T, FriendshipAggregateArgs>): Prisma.PrismaPromise<GetFriendshipAggregateType<T>>

    /**
     * Group by Friendship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FriendshipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FriendshipGroupByArgs['orderBy'] }
        : { orderBy?: FriendshipGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FriendshipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFriendshipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Friendship model
   */
  readonly fields: FriendshipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Friendship.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FriendshipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    friend<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Friendship model
   */
  interface FriendshipFieldRefs {
    readonly id: FieldRef<"Friendship", 'String'>
    readonly userId: FieldRef<"Friendship", 'String'>
    readonly friendId: FieldRef<"Friendship", 'String'>
    readonly createdAt: FieldRef<"Friendship", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Friendship findUnique
   */
  export type FriendshipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendship to fetch.
     */
    where: FriendshipWhereUniqueInput
  }

  /**
   * Friendship findUniqueOrThrow
   */
  export type FriendshipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendship to fetch.
     */
    where: FriendshipWhereUniqueInput
  }

  /**
   * Friendship findFirst
   */
  export type FriendshipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendship to fetch.
     */
    where?: FriendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friendships to fetch.
     */
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Friendships.
     */
    cursor?: FriendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friendships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Friendships.
     */
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }

  /**
   * Friendship findFirstOrThrow
   */
  export type FriendshipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendship to fetch.
     */
    where?: FriendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friendships to fetch.
     */
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Friendships.
     */
    cursor?: FriendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friendships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Friendships.
     */
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }

  /**
   * Friendship findMany
   */
  export type FriendshipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendships to fetch.
     */
    where?: FriendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friendships to fetch.
     */
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Friendships.
     */
    cursor?: FriendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friendships.
     */
    skip?: number
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }

  /**
   * Friendship create
   */
  export type FriendshipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * The data needed to create a Friendship.
     */
    data: XOR<FriendshipCreateInput, FriendshipUncheckedCreateInput>
  }

  /**
   * Friendship createMany
   */
  export type FriendshipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Friendships.
     */
    data: FriendshipCreateManyInput | FriendshipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Friendship createManyAndReturn
   */
  export type FriendshipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * The data used to create many Friendships.
     */
    data: FriendshipCreateManyInput | FriendshipCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Friendship update
   */
  export type FriendshipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * The data needed to update a Friendship.
     */
    data: XOR<FriendshipUpdateInput, FriendshipUncheckedUpdateInput>
    /**
     * Choose, which Friendship to update.
     */
    where: FriendshipWhereUniqueInput
  }

  /**
   * Friendship updateMany
   */
  export type FriendshipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Friendships.
     */
    data: XOR<FriendshipUpdateManyMutationInput, FriendshipUncheckedUpdateManyInput>
    /**
     * Filter which Friendships to update
     */
    where?: FriendshipWhereInput
    /**
     * Limit how many Friendships to update.
     */
    limit?: number
  }

  /**
   * Friendship updateManyAndReturn
   */
  export type FriendshipUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * The data used to update Friendships.
     */
    data: XOR<FriendshipUpdateManyMutationInput, FriendshipUncheckedUpdateManyInput>
    /**
     * Filter which Friendships to update
     */
    where?: FriendshipWhereInput
    /**
     * Limit how many Friendships to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Friendship upsert
   */
  export type FriendshipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * The filter to search for the Friendship to update in case it exists.
     */
    where: FriendshipWhereUniqueInput
    /**
     * In case the Friendship found by the `where` argument doesn't exist, create a new Friendship with this data.
     */
    create: XOR<FriendshipCreateInput, FriendshipUncheckedCreateInput>
    /**
     * In case the Friendship was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FriendshipUpdateInput, FriendshipUncheckedUpdateInput>
  }

  /**
   * Friendship delete
   */
  export type FriendshipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter which Friendship to delete.
     */
    where: FriendshipWhereUniqueInput
  }

  /**
   * Friendship deleteMany
   */
  export type FriendshipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Friendships to delete
     */
    where?: FriendshipWhereInput
    /**
     * Limit how many Friendships to delete.
     */
    limit?: number
  }

  /**
   * Friendship without action
   */
  export type FriendshipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
  }


  /**
   * Model Report
   */

  export type AggregateReport = {
    _count: ReportCountAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  export type ReportMinAggregateOutputType = {
    id: string | null
    userId: string | null
    reportedId: string | null
    reason: string | null
    createdAt: Date | null
  }

  export type ReportMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    reportedId: string | null
    reason: string | null
    createdAt: Date | null
  }

  export type ReportCountAggregateOutputType = {
    id: number
    userId: number
    reportedId: number
    reason: number
    createdAt: number
    _all: number
  }


  export type ReportMinAggregateInputType = {
    id?: true
    userId?: true
    reportedId?: true
    reason?: true
    createdAt?: true
  }

  export type ReportMaxAggregateInputType = {
    id?: true
    userId?: true
    reportedId?: true
    reason?: true
    createdAt?: true
  }

  export type ReportCountAggregateInputType = {
    id?: true
    userId?: true
    reportedId?: true
    reason?: true
    createdAt?: true
    _all?: true
  }

  export type ReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Report to aggregate.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reports
    **/
    _count?: true | ReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportMaxAggregateInputType
  }

  export type GetReportAggregateType<T extends ReportAggregateArgs> = {
        [P in keyof T & keyof AggregateReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReport[P]>
      : GetScalarType<T[P], AggregateReport[P]>
  }




  export type ReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithAggregationInput | ReportOrderByWithAggregationInput[]
    by: ReportScalarFieldEnum[] | ReportScalarFieldEnum
    having?: ReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportCountAggregateInputType | true
    _min?: ReportMinAggregateInputType
    _max?: ReportMaxAggregateInputType
  }

  export type ReportGroupByOutputType = {
    id: string
    userId: string
    reportedId: string
    reason: string
    createdAt: Date
    _count: ReportCountAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  type GetReportGroupByPayload<T extends ReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportGroupByOutputType[P]>
            : GetScalarType<T[P], ReportGroupByOutputType[P]>
        }
      >
    >


  export type ReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    reportedId?: boolean
    reason?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    reportedUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    reportedId?: boolean
    reason?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    reportedUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    reportedId?: boolean
    reason?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    reportedUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectScalar = {
    id?: boolean
    userId?: boolean
    reportedId?: boolean
    reason?: boolean
    createdAt?: boolean
  }

  export type ReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "reportedId" | "reason" | "createdAt", ExtArgs["result"]["report"]>
  export type ReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    reportedUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    reportedUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    reportedUser?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Report"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      reportedUser: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      reportedId: string
      reason: string
      createdAt: Date
    }, ExtArgs["result"]["report"]>
    composites: {}
  }

  type ReportGetPayload<S extends boolean | null | undefined | ReportDefaultArgs> = $Result.GetResult<Prisma.$ReportPayload, S>

  type ReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReportCountAggregateInputType | true
    }

  export interface ReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Report'], meta: { name: 'Report' } }
    /**
     * Find zero or one Report that matches the filter.
     * @param {ReportFindUniqueArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReportFindUniqueArgs>(args: SelectSubset<T, ReportFindUniqueArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Report that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReportFindUniqueOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReportFindUniqueOrThrowArgs>(args: SelectSubset<T, ReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReportFindFirstArgs>(args?: SelectSubset<T, ReportFindFirstArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReportFindFirstOrThrowArgs>(args?: SelectSubset<T, ReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reports
     * const reports = await prisma.report.findMany()
     * 
     * // Get first 10 Reports
     * const reports = await prisma.report.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportWithIdOnly = await prisma.report.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReportFindManyArgs>(args?: SelectSubset<T, ReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Report.
     * @param {ReportCreateArgs} args - Arguments to create a Report.
     * @example
     * // Create one Report
     * const Report = await prisma.report.create({
     *   data: {
     *     // ... data to create a Report
     *   }
     * })
     * 
     */
    create<T extends ReportCreateArgs>(args: SelectSubset<T, ReportCreateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reports.
     * @param {ReportCreateManyArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReportCreateManyArgs>(args?: SelectSubset<T, ReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reports and returns the data saved in the database.
     * @param {ReportCreateManyAndReturnArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reports and only return the `id`
     * const reportWithIdOnly = await prisma.report.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReportCreateManyAndReturnArgs>(args?: SelectSubset<T, ReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Report.
     * @param {ReportDeleteArgs} args - Arguments to delete one Report.
     * @example
     * // Delete one Report
     * const Report = await prisma.report.delete({
     *   where: {
     *     // ... filter to delete one Report
     *   }
     * })
     * 
     */
    delete<T extends ReportDeleteArgs>(args: SelectSubset<T, ReportDeleteArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Report.
     * @param {ReportUpdateArgs} args - Arguments to update one Report.
     * @example
     * // Update one Report
     * const report = await prisma.report.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReportUpdateArgs>(args: SelectSubset<T, ReportUpdateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reports.
     * @param {ReportDeleteManyArgs} args - Arguments to filter Reports to delete.
     * @example
     * // Delete a few Reports
     * const { count } = await prisma.report.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReportDeleteManyArgs>(args?: SelectSubset<T, ReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReportUpdateManyArgs>(args: SelectSubset<T, ReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports and returns the data updated in the database.
     * @param {ReportUpdateManyAndReturnArgs} args - Arguments to update many Reports.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reports and only return the `id`
     * const reportWithIdOnly = await prisma.report.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReportUpdateManyAndReturnArgs>(args: SelectSubset<T, ReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Report.
     * @param {ReportUpsertArgs} args - Arguments to update or create a Report.
     * @example
     * // Update or create a Report
     * const report = await prisma.report.upsert({
     *   create: {
     *     // ... data to create a Report
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Report we want to update
     *   }
     * })
     */
    upsert<T extends ReportUpsertArgs>(args: SelectSubset<T, ReportUpsertArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportCountArgs} args - Arguments to filter Reports to count.
     * @example
     * // Count the number of Reports
     * const count = await prisma.report.count({
     *   where: {
     *     // ... the filter for the Reports we want to count
     *   }
     * })
    **/
    count<T extends ReportCountArgs>(
      args?: Subset<T, ReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReportAggregateArgs>(args: Subset<T, ReportAggregateArgs>): Prisma.PrismaPromise<GetReportAggregateType<T>>

    /**
     * Group by Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReportGroupByArgs['orderBy'] }
        : { orderBy?: ReportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Report model
   */
  readonly fields: ReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Report.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reportedUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Report model
   */
  interface ReportFieldRefs {
    readonly id: FieldRef<"Report", 'String'>
    readonly userId: FieldRef<"Report", 'String'>
    readonly reportedId: FieldRef<"Report", 'String'>
    readonly reason: FieldRef<"Report", 'String'>
    readonly createdAt: FieldRef<"Report", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Report findUnique
   */
  export type ReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findUniqueOrThrow
   */
  export type ReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findFirst
   */
  export type ReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findFirstOrThrow
   */
  export type ReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findMany
   */
  export type ReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Reports to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report create
   */
  export type ReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to create a Report.
     */
    data: XOR<ReportCreateInput, ReportUncheckedCreateInput>
  }

  /**
   * Report createMany
   */
  export type ReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Report createManyAndReturn
   */
  export type ReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Report update
   */
  export type ReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to update a Report.
     */
    data: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
    /**
     * Choose, which Report to update.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report updateMany
   */
  export type ReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to update.
     */
    limit?: number
  }

  /**
   * Report updateManyAndReturn
   */
  export type ReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Report upsert
   */
  export type ReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The filter to search for the Report to update in case it exists.
     */
    where: ReportWhereUniqueInput
    /**
     * In case the Report found by the `where` argument doesn't exist, create a new Report with this data.
     */
    create: XOR<ReportCreateInput, ReportUncheckedCreateInput>
    /**
     * In case the Report was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
  }

  /**
   * Report delete
   */
  export type ReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter which Report to delete.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report deleteMany
   */
  export type ReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reports to delete
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to delete.
     */
    limit?: number
  }

  /**
   * Report without action
   */
  export type ReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
  }


  /**
   * Model History
   */

  export type AggregateHistory = {
    _count: HistoryCountAggregateOutputType | null
    _min: HistoryMinAggregateOutputType | null
    _max: HistoryMaxAggregateOutputType | null
  }

  export type HistoryMinAggregateOutputType = {
    id: string | null
    user1Id: string | null
    user2Id: string | null
    roomId: string | null
    startedAt: Date | null
    endedAt: Date | null
  }

  export type HistoryMaxAggregateOutputType = {
    id: string | null
    user1Id: string | null
    user2Id: string | null
    roomId: string | null
    startedAt: Date | null
    endedAt: Date | null
  }

  export type HistoryCountAggregateOutputType = {
    id: number
    user1Id: number
    user2Id: number
    roomId: number
    startedAt: number
    endedAt: number
    _all: number
  }


  export type HistoryMinAggregateInputType = {
    id?: true
    user1Id?: true
    user2Id?: true
    roomId?: true
    startedAt?: true
    endedAt?: true
  }

  export type HistoryMaxAggregateInputType = {
    id?: true
    user1Id?: true
    user2Id?: true
    roomId?: true
    startedAt?: true
    endedAt?: true
  }

  export type HistoryCountAggregateInputType = {
    id?: true
    user1Id?: true
    user2Id?: true
    roomId?: true
    startedAt?: true
    endedAt?: true
    _all?: true
  }

  export type HistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which History to aggregate.
     */
    where?: HistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Histories to fetch.
     */
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Histories
    **/
    _count?: true | HistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistoryMaxAggregateInputType
  }

  export type GetHistoryAggregateType<T extends HistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistory[P]>
      : GetScalarType<T[P], AggregateHistory[P]>
  }




  export type HistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoryWhereInput
    orderBy?: HistoryOrderByWithAggregationInput | HistoryOrderByWithAggregationInput[]
    by: HistoryScalarFieldEnum[] | HistoryScalarFieldEnum
    having?: HistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistoryCountAggregateInputType | true
    _min?: HistoryMinAggregateInputType
    _max?: HistoryMaxAggregateInputType
  }

  export type HistoryGroupByOutputType = {
    id: string
    user1Id: string
    user2Id: string
    roomId: string | null
    startedAt: Date
    endedAt: Date | null
    _count: HistoryCountAggregateOutputType | null
    _min: HistoryMinAggregateOutputType | null
    _max: HistoryMaxAggregateOutputType | null
  }

  type GetHistoryGroupByPayload<T extends HistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistoryGroupByOutputType[P]>
            : GetScalarType<T[P], HistoryGroupByOutputType[P]>
        }
      >
    >


  export type HistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user1Id?: boolean
    user2Id?: boolean
    roomId?: boolean
    startedAt?: boolean
    endedAt?: boolean
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["history"]>

  export type HistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user1Id?: boolean
    user2Id?: boolean
    roomId?: boolean
    startedAt?: boolean
    endedAt?: boolean
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["history"]>

  export type HistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user1Id?: boolean
    user2Id?: boolean
    roomId?: boolean
    startedAt?: boolean
    endedAt?: boolean
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["history"]>

  export type HistorySelectScalar = {
    id?: boolean
    user1Id?: boolean
    user2Id?: boolean
    roomId?: boolean
    startedAt?: boolean
    endedAt?: boolean
  }

  export type HistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user1Id" | "user2Id" | "roomId" | "startedAt" | "endedAt", ExtArgs["result"]["history"]>
  export type HistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type HistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type HistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $HistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "History"
    objects: {
      user1: Prisma.$UserPayload<ExtArgs>
      user2: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user1Id: string
      user2Id: string
      roomId: string | null
      startedAt: Date
      endedAt: Date | null
    }, ExtArgs["result"]["history"]>
    composites: {}
  }

  type HistoryGetPayload<S extends boolean | null | undefined | HistoryDefaultArgs> = $Result.GetResult<Prisma.$HistoryPayload, S>

  type HistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HistoryCountAggregateInputType | true
    }

  export interface HistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['History'], meta: { name: 'History' } }
    /**
     * Find zero or one History that matches the filter.
     * @param {HistoryFindUniqueArgs} args - Arguments to find a History
     * @example
     * // Get one History
     * const history = await prisma.history.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HistoryFindUniqueArgs>(args: SelectSubset<T, HistoryFindUniqueArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one History that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HistoryFindUniqueOrThrowArgs} args - Arguments to find a History
     * @example
     * // Get one History
     * const history = await prisma.history.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, HistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first History that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryFindFirstArgs} args - Arguments to find a History
     * @example
     * // Get one History
     * const history = await prisma.history.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HistoryFindFirstArgs>(args?: SelectSubset<T, HistoryFindFirstArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first History that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryFindFirstOrThrowArgs} args - Arguments to find a History
     * @example
     * // Get one History
     * const history = await prisma.history.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, HistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Histories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Histories
     * const histories = await prisma.history.findMany()
     * 
     * // Get first 10 Histories
     * const histories = await prisma.history.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const historyWithIdOnly = await prisma.history.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HistoryFindManyArgs>(args?: SelectSubset<T, HistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a History.
     * @param {HistoryCreateArgs} args - Arguments to create a History.
     * @example
     * // Create one History
     * const History = await prisma.history.create({
     *   data: {
     *     // ... data to create a History
     *   }
     * })
     * 
     */
    create<T extends HistoryCreateArgs>(args: SelectSubset<T, HistoryCreateArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Histories.
     * @param {HistoryCreateManyArgs} args - Arguments to create many Histories.
     * @example
     * // Create many Histories
     * const history = await prisma.history.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HistoryCreateManyArgs>(args?: SelectSubset<T, HistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Histories and returns the data saved in the database.
     * @param {HistoryCreateManyAndReturnArgs} args - Arguments to create many Histories.
     * @example
     * // Create many Histories
     * const history = await prisma.history.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Histories and only return the `id`
     * const historyWithIdOnly = await prisma.history.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, HistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a History.
     * @param {HistoryDeleteArgs} args - Arguments to delete one History.
     * @example
     * // Delete one History
     * const History = await prisma.history.delete({
     *   where: {
     *     // ... filter to delete one History
     *   }
     * })
     * 
     */
    delete<T extends HistoryDeleteArgs>(args: SelectSubset<T, HistoryDeleteArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one History.
     * @param {HistoryUpdateArgs} args - Arguments to update one History.
     * @example
     * // Update one History
     * const history = await prisma.history.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HistoryUpdateArgs>(args: SelectSubset<T, HistoryUpdateArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Histories.
     * @param {HistoryDeleteManyArgs} args - Arguments to filter Histories to delete.
     * @example
     * // Delete a few Histories
     * const { count } = await prisma.history.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HistoryDeleteManyArgs>(args?: SelectSubset<T, HistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Histories
     * const history = await prisma.history.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HistoryUpdateManyArgs>(args: SelectSubset<T, HistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Histories and returns the data updated in the database.
     * @param {HistoryUpdateManyAndReturnArgs} args - Arguments to update many Histories.
     * @example
     * // Update many Histories
     * const history = await prisma.history.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Histories and only return the `id`
     * const historyWithIdOnly = await prisma.history.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, HistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one History.
     * @param {HistoryUpsertArgs} args - Arguments to update or create a History.
     * @example
     * // Update or create a History
     * const history = await prisma.history.upsert({
     *   create: {
     *     // ... data to create a History
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the History we want to update
     *   }
     * })
     */
    upsert<T extends HistoryUpsertArgs>(args: SelectSubset<T, HistoryUpsertArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryCountArgs} args - Arguments to filter Histories to count.
     * @example
     * // Count the number of Histories
     * const count = await prisma.history.count({
     *   where: {
     *     // ... the filter for the Histories we want to count
     *   }
     * })
    **/
    count<T extends HistoryCountArgs>(
      args?: Subset<T, HistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a History.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HistoryAggregateArgs>(args: Subset<T, HistoryAggregateArgs>): Prisma.PrismaPromise<GetHistoryAggregateType<T>>

    /**
     * Group by History.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HistoryGroupByArgs['orderBy'] }
        : { orderBy?: HistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the History model
   */
  readonly fields: HistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for History.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user1<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user2<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the History model
   */
  interface HistoryFieldRefs {
    readonly id: FieldRef<"History", 'String'>
    readonly user1Id: FieldRef<"History", 'String'>
    readonly user2Id: FieldRef<"History", 'String'>
    readonly roomId: FieldRef<"History", 'String'>
    readonly startedAt: FieldRef<"History", 'DateTime'>
    readonly endedAt: FieldRef<"History", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * History findUnique
   */
  export type HistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter, which History to fetch.
     */
    where: HistoryWhereUniqueInput
  }

  /**
   * History findUniqueOrThrow
   */
  export type HistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter, which History to fetch.
     */
    where: HistoryWhereUniqueInput
  }

  /**
   * History findFirst
   */
  export type HistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter, which History to fetch.
     */
    where?: HistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Histories to fetch.
     */
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Histories.
     */
    cursor?: HistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Histories.
     */
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }

  /**
   * History findFirstOrThrow
   */
  export type HistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter, which History to fetch.
     */
    where?: HistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Histories to fetch.
     */
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Histories.
     */
    cursor?: HistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Histories.
     */
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }

  /**
   * History findMany
   */
  export type HistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter, which Histories to fetch.
     */
    where?: HistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Histories to fetch.
     */
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Histories.
     */
    cursor?: HistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Histories.
     */
    skip?: number
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }

  /**
   * History create
   */
  export type HistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a History.
     */
    data: XOR<HistoryCreateInput, HistoryUncheckedCreateInput>
  }

  /**
   * History createMany
   */
  export type HistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Histories.
     */
    data: HistoryCreateManyInput | HistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * History createManyAndReturn
   */
  export type HistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * The data used to create many Histories.
     */
    data: HistoryCreateManyInput | HistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * History update
   */
  export type HistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a History.
     */
    data: XOR<HistoryUpdateInput, HistoryUncheckedUpdateInput>
    /**
     * Choose, which History to update.
     */
    where: HistoryWhereUniqueInput
  }

  /**
   * History updateMany
   */
  export type HistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Histories.
     */
    data: XOR<HistoryUpdateManyMutationInput, HistoryUncheckedUpdateManyInput>
    /**
     * Filter which Histories to update
     */
    where?: HistoryWhereInput
    /**
     * Limit how many Histories to update.
     */
    limit?: number
  }

  /**
   * History updateManyAndReturn
   */
  export type HistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * The data used to update Histories.
     */
    data: XOR<HistoryUpdateManyMutationInput, HistoryUncheckedUpdateManyInput>
    /**
     * Filter which Histories to update
     */
    where?: HistoryWhereInput
    /**
     * Limit how many Histories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * History upsert
   */
  export type HistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the History to update in case it exists.
     */
    where: HistoryWhereUniqueInput
    /**
     * In case the History found by the `where` argument doesn't exist, create a new History with this data.
     */
    create: XOR<HistoryCreateInput, HistoryUncheckedCreateInput>
    /**
     * In case the History was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HistoryUpdateInput, HistoryUncheckedUpdateInput>
  }

  /**
   * History delete
   */
  export type HistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter which History to delete.
     */
    where: HistoryWhereUniqueInput
  }

  /**
   * History deleteMany
   */
  export type HistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Histories to delete
     */
    where?: HistoryWhereInput
    /**
     * Limit how many Histories to delete.
     */
    limit?: number
  }

  /**
   * History without action
   */
  export type HistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
  }


  /**
   * Model Contact
   */

  export type AggregateContact = {
    _count: ContactCountAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  export type ContactMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    subject: string | null
    message: string | null
    createdAt: Date | null
  }

  export type ContactMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    subject: string | null
    message: string | null
    createdAt: Date | null
  }

  export type ContactCountAggregateOutputType = {
    id: number
    name: number
    email: number
    subject: number
    message: number
    createdAt: number
    _all: number
  }


  export type ContactMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    subject?: true
    message?: true
    createdAt?: true
  }

  export type ContactMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    subject?: true
    message?: true
    createdAt?: true
  }

  export type ContactCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    subject?: true
    message?: true
    createdAt?: true
    _all?: true
  }

  export type ContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contact to aggregate.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contacts
    **/
    _count?: true | ContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactMaxAggregateInputType
  }

  export type GetContactAggregateType<T extends ContactAggregateArgs> = {
        [P in keyof T & keyof AggregateContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContact[P]>
      : GetScalarType<T[P], AggregateContact[P]>
  }




  export type ContactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactWhereInput
    orderBy?: ContactOrderByWithAggregationInput | ContactOrderByWithAggregationInput[]
    by: ContactScalarFieldEnum[] | ContactScalarFieldEnum
    having?: ContactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactCountAggregateInputType | true
    _min?: ContactMinAggregateInputType
    _max?: ContactMaxAggregateInputType
  }

  export type ContactGroupByOutputType = {
    id: string
    name: string
    email: string
    subject: string
    message: string
    createdAt: Date
    _count: ContactCountAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  type GetContactGroupByPayload<T extends ContactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactGroupByOutputType[P]>
            : GetScalarType<T[P], ContactGroupByOutputType[P]>
        }
      >
    >


  export type ContactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    subject?: boolean
    message?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    subject?: boolean
    message?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    subject?: boolean
    message?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    subject?: boolean
    message?: boolean
    createdAt?: boolean
  }

  export type ContactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "subject" | "message" | "createdAt", ExtArgs["result"]["contact"]>

  export type $ContactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contact"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      subject: string
      message: string
      createdAt: Date
    }, ExtArgs["result"]["contact"]>
    composites: {}
  }

  type ContactGetPayload<S extends boolean | null | undefined | ContactDefaultArgs> = $Result.GetResult<Prisma.$ContactPayload, S>

  type ContactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactCountAggregateInputType | true
    }

  export interface ContactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contact'], meta: { name: 'Contact' } }
    /**
     * Find zero or one Contact that matches the filter.
     * @param {ContactFindUniqueArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactFindUniqueArgs>(args: SelectSubset<T, ContactFindUniqueArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactFindUniqueOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactFindFirstArgs>(args?: SelectSubset<T, ContactFindFirstArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contacts
     * const contacts = await prisma.contact.findMany()
     * 
     * // Get first 10 Contacts
     * const contacts = await prisma.contact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactWithIdOnly = await prisma.contact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactFindManyArgs>(args?: SelectSubset<T, ContactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contact.
     * @param {ContactCreateArgs} args - Arguments to create a Contact.
     * @example
     * // Create one Contact
     * const Contact = await prisma.contact.create({
     *   data: {
     *     // ... data to create a Contact
     *   }
     * })
     * 
     */
    create<T extends ContactCreateArgs>(args: SelectSubset<T, ContactCreateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contacts.
     * @param {ContactCreateManyArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactCreateManyArgs>(args?: SelectSubset<T, ContactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contacts and returns the data saved in the database.
     * @param {ContactCreateManyAndReturnArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contact.
     * @param {ContactDeleteArgs} args - Arguments to delete one Contact.
     * @example
     * // Delete one Contact
     * const Contact = await prisma.contact.delete({
     *   where: {
     *     // ... filter to delete one Contact
     *   }
     * })
     * 
     */
    delete<T extends ContactDeleteArgs>(args: SelectSubset<T, ContactDeleteArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contact.
     * @param {ContactUpdateArgs} args - Arguments to update one Contact.
     * @example
     * // Update one Contact
     * const contact = await prisma.contact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactUpdateArgs>(args: SelectSubset<T, ContactUpdateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contacts.
     * @param {ContactDeleteManyArgs} args - Arguments to filter Contacts to delete.
     * @example
     * // Delete a few Contacts
     * const { count } = await prisma.contact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactDeleteManyArgs>(args?: SelectSubset<T, ContactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactUpdateManyArgs>(args: SelectSubset<T, ContactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts and returns the data updated in the database.
     * @param {ContactUpdateManyAndReturnArgs} args - Arguments to update many Contacts.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContactUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contact.
     * @param {ContactUpsertArgs} args - Arguments to update or create a Contact.
     * @example
     * // Update or create a Contact
     * const contact = await prisma.contact.upsert({
     *   create: {
     *     // ... data to create a Contact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contact we want to update
     *   }
     * })
     */
    upsert<T extends ContactUpsertArgs>(args: SelectSubset<T, ContactUpsertArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactCountArgs} args - Arguments to filter Contacts to count.
     * @example
     * // Count the number of Contacts
     * const count = await prisma.contact.count({
     *   where: {
     *     // ... the filter for the Contacts we want to count
     *   }
     * })
    **/
    count<T extends ContactCountArgs>(
      args?: Subset<T, ContactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactAggregateArgs>(args: Subset<T, ContactAggregateArgs>): Prisma.PrismaPromise<GetContactAggregateType<T>>

    /**
     * Group by Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactGroupByArgs['orderBy'] }
        : { orderBy?: ContactGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contact model
   */
  readonly fields: ContactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Contact model
   */
  interface ContactFieldRefs {
    readonly id: FieldRef<"Contact", 'String'>
    readonly name: FieldRef<"Contact", 'String'>
    readonly email: FieldRef<"Contact", 'String'>
    readonly subject: FieldRef<"Contact", 'String'>
    readonly message: FieldRef<"Contact", 'String'>
    readonly createdAt: FieldRef<"Contact", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Contact findUnique
   */
  export type ContactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findUniqueOrThrow
   */
  export type ContactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findFirst
   */
  export type ContactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findFirstOrThrow
   */
  export type ContactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findMany
   */
  export type ContactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact create
   */
  export type ContactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data needed to create a Contact.
     */
    data: XOR<ContactCreateInput, ContactUncheckedCreateInput>
  }

  /**
   * Contact createMany
   */
  export type ContactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contact createManyAndReturn
   */
  export type ContactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contact update
   */
  export type ContactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data needed to update a Contact.
     */
    data: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
    /**
     * Choose, which Contact to update.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact updateMany
   */
  export type ContactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
  }

  /**
   * Contact updateManyAndReturn
   */
  export type ContactUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
  }

  /**
   * Contact upsert
   */
  export type ContactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The filter to search for the Contact to update in case it exists.
     */
    where: ContactWhereUniqueInput
    /**
     * In case the Contact found by the `where` argument doesn't exist, create a new Contact with this data.
     */
    create: XOR<ContactCreateInput, ContactUncheckedCreateInput>
    /**
     * In case the Contact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
  }

  /**
   * Contact delete
   */
  export type ContactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter which Contact to delete.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact deleteMany
   */
  export type ContactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contacts to delete
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to delete.
     */
    limit?: number
  }

  /**
   * Contact without action
   */
  export type ContactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    clerkUserId: 'clerkUserId',
    email: 'email',
    name: 'name',
    imageUrl: 'imageUrl',
    gender: 'gender',
    dob: 'dob',
    country: 'country',
    state: 'state',
    city: 'city',
    latitude: 'latitude',
    longitude: 'longitude',
    isPremium: 'isPremium',
    interests: 'interests',
    preferredLang: 'preferredLang',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MatchScalarFieldEnum: {
    id: 'id',
    user1Id: 'user1Id',
    user2Id: 'user2Id',
    roomId: 'roomId',
    startedAt: 'startedAt',
    endedAt: 'endedAt'
  };

  export type MatchScalarFieldEnum = (typeof MatchScalarFieldEnum)[keyof typeof MatchScalarFieldEnum]


  export const RoomScalarFieldEnum: {
    id: 'id',
    isActive: 'isActive',
    createdAt: 'createdAt',
    endedAt: 'endedAt'
  };

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const RoomParticipantScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    roomId: 'roomId',
    joinedAt: 'joinedAt',
    leftAt: 'leftAt'
  };

  export type RoomParticipantScalarFieldEnum = (typeof RoomParticipantScalarFieldEnum)[keyof typeof RoomParticipantScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    content: 'content',
    senderId: 'senderId',
    roomId: 'roomId',
    createdAt: 'createdAt'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const MessageWithFreindsScalarFieldEnum: {
    id: 'id',
    content: 'content',
    type: 'type',
    senderId: 'senderId',
    receiverId: 'receiverId',
    createdAt: 'createdAt'
  };

  export type MessageWithFreindsScalarFieldEnum = (typeof MessageWithFreindsScalarFieldEnum)[keyof typeof MessageWithFreindsScalarFieldEnum]


  export const AITranscriptScalarFieldEnum: {
    id: 'id',
    roomId: 'roomId',
    userId: 'userId',
    text: 'text',
    lang: 'lang',
    isTranslated: 'isTranslated',
    translatedText: 'translatedText',
    createdAt: 'createdAt'
  };

  export type AITranscriptScalarFieldEnum = (typeof AITranscriptScalarFieldEnum)[keyof typeof AITranscriptScalarFieldEnum]


  export const SubscriptionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    plan: 'plan',
    startDate: 'startDate',
    endDate: 'endDate',
    razorpayId: 'razorpayId',
    paymentStatus: 'paymentStatus'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


  export const FriendshipScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    friendId: 'friendId',
    createdAt: 'createdAt'
  };

  export type FriendshipScalarFieldEnum = (typeof FriendshipScalarFieldEnum)[keyof typeof FriendshipScalarFieldEnum]


  export const ReportScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    reportedId: 'reportedId',
    reason: 'reason',
    createdAt: 'createdAt'
  };

  export type ReportScalarFieldEnum = (typeof ReportScalarFieldEnum)[keyof typeof ReportScalarFieldEnum]


  export const HistoryScalarFieldEnum: {
    id: 'id',
    user1Id: 'user1Id',
    user2Id: 'user2Id',
    roomId: 'roomId',
    startedAt: 'startedAt',
    endedAt: 'endedAt'
  };

  export type HistoryScalarFieldEnum = (typeof HistoryScalarFieldEnum)[keyof typeof HistoryScalarFieldEnum]


  export const ContactScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    subject: 'subject',
    message: 'message',
    createdAt: 'createdAt'
  };

  export type ContactScalarFieldEnum = (typeof ContactScalarFieldEnum)[keyof typeof ContactScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Interest[]'
   */
  export type ListEnumInterestFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Interest[]'>
    


  /**
   * Reference to a field of type 'Interest'
   */
  export type EnumInterestFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Interest'>
    


  /**
   * Reference to a field of type 'Language[]'
   */
  export type ListEnumLanguageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Language[]'>
    


  /**
   * Reference to a field of type 'Language'
   */
  export type EnumLanguageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Language'>
    


  /**
   * Reference to a field of type 'MessageType'
   */
  export type EnumMessageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageType'>
    


  /**
   * Reference to a field of type 'MessageType[]'
   */
  export type ListEnumMessageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    clerkUserId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    imageUrl?: StringNullableFilter<"User"> | string | null
    gender?: EnumGenderFilter<"User"> | $Enums.Gender
    dob?: DateTimeFilter<"User"> | Date | string
    country?: StringNullableFilter<"User"> | string | null
    state?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
    latitude?: FloatNullableFilter<"User"> | number | null
    longitude?: FloatNullableFilter<"User"> | number | null
    isPremium?: BoolFilter<"User"> | boolean
    interests?: EnumInterestNullableListFilter<"User">
    preferredLang?: EnumLanguageNullableListFilter<"User">
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    matchesAsUser1?: MatchListRelationFilter
    matchesAsUser2?: MatchListRelationFilter
    historyAsUser1?: HistoryListRelationFilter
    historyAsUser2?: HistoryListRelationFilter
    roomsJoined?: RoomParticipantListRelationFilter
    subscriptions?: SubscriptionListRelationFilter
    aitranscripts?: AITranscriptListRelationFilter
    messages?: MessageListRelationFilter
    sentFriends?: FriendshipListRelationFilter
    receivedFriends?: FriendshipListRelationFilter
    userReported?: ReportListRelationFilter
    reportedUser?: ReportListRelationFilter
    messagesenderperson?: MessageWithFreindsListRelationFilter
    messagereceiverperson?: MessageWithFreindsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    gender?: SortOrder
    dob?: SortOrder
    country?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    isPremium?: SortOrder
    interests?: SortOrder
    preferredLang?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    matchesAsUser1?: MatchOrderByRelationAggregateInput
    matchesAsUser2?: MatchOrderByRelationAggregateInput
    historyAsUser1?: HistoryOrderByRelationAggregateInput
    historyAsUser2?: HistoryOrderByRelationAggregateInput
    roomsJoined?: RoomParticipantOrderByRelationAggregateInput
    subscriptions?: SubscriptionOrderByRelationAggregateInput
    aitranscripts?: AITranscriptOrderByRelationAggregateInput
    messages?: MessageOrderByRelationAggregateInput
    sentFriends?: FriendshipOrderByRelationAggregateInput
    receivedFriends?: FriendshipOrderByRelationAggregateInput
    userReported?: ReportOrderByRelationAggregateInput
    reportedUser?: ReportOrderByRelationAggregateInput
    messagesenderperson?: MessageWithFreindsOrderByRelationAggregateInput
    messagereceiverperson?: MessageWithFreindsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clerkUserId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    imageUrl?: StringNullableFilter<"User"> | string | null
    gender?: EnumGenderFilter<"User"> | $Enums.Gender
    dob?: DateTimeFilter<"User"> | Date | string
    country?: StringNullableFilter<"User"> | string | null
    state?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
    latitude?: FloatNullableFilter<"User"> | number | null
    longitude?: FloatNullableFilter<"User"> | number | null
    isPremium?: BoolFilter<"User"> | boolean
    interests?: EnumInterestNullableListFilter<"User">
    preferredLang?: EnumLanguageNullableListFilter<"User">
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    matchesAsUser1?: MatchListRelationFilter
    matchesAsUser2?: MatchListRelationFilter
    historyAsUser1?: HistoryListRelationFilter
    historyAsUser2?: HistoryListRelationFilter
    roomsJoined?: RoomParticipantListRelationFilter
    subscriptions?: SubscriptionListRelationFilter
    aitranscripts?: AITranscriptListRelationFilter
    messages?: MessageListRelationFilter
    sentFriends?: FriendshipListRelationFilter
    receivedFriends?: FriendshipListRelationFilter
    userReported?: ReportListRelationFilter
    reportedUser?: ReportListRelationFilter
    messagesenderperson?: MessageWithFreindsListRelationFilter
    messagereceiverperson?: MessageWithFreindsListRelationFilter
  }, "id" | "clerkUserId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    gender?: SortOrder
    dob?: SortOrder
    country?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    isPremium?: SortOrder
    interests?: SortOrder
    preferredLang?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    clerkUserId?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    gender?: EnumGenderWithAggregatesFilter<"User"> | $Enums.Gender
    dob?: DateTimeWithAggregatesFilter<"User"> | Date | string
    country?: StringNullableWithAggregatesFilter<"User"> | string | null
    state?: StringNullableWithAggregatesFilter<"User"> | string | null
    city?: StringNullableWithAggregatesFilter<"User"> | string | null
    latitude?: FloatNullableWithAggregatesFilter<"User"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"User"> | number | null
    isPremium?: BoolWithAggregatesFilter<"User"> | boolean
    interests?: EnumInterestNullableListFilter<"User">
    preferredLang?: EnumLanguageNullableListFilter<"User">
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type MatchWhereInput = {
    AND?: MatchWhereInput | MatchWhereInput[]
    OR?: MatchWhereInput[]
    NOT?: MatchWhereInput | MatchWhereInput[]
    id?: StringFilter<"Match"> | string
    user1Id?: StringFilter<"Match"> | string
    user2Id?: StringFilter<"Match"> | string
    roomId?: StringNullableFilter<"Match"> | string | null
    startedAt?: DateTimeFilter<"Match"> | Date | string
    endedAt?: DateTimeNullableFilter<"Match"> | Date | string | null
    user1?: XOR<UserScalarRelationFilter, UserWhereInput>
    user2?: XOR<UserScalarRelationFilter, UserWhereInput>
    room?: XOR<RoomNullableScalarRelationFilter, RoomWhereInput> | null
  }

  export type MatchOrderByWithRelationInput = {
    id?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
    roomId?: SortOrderInput | SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    user1?: UserOrderByWithRelationInput
    user2?: UserOrderByWithRelationInput
    room?: RoomOrderByWithRelationInput
  }

  export type MatchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MatchWhereInput | MatchWhereInput[]
    OR?: MatchWhereInput[]
    NOT?: MatchWhereInput | MatchWhereInput[]
    user1Id?: StringFilter<"Match"> | string
    user2Id?: StringFilter<"Match"> | string
    roomId?: StringNullableFilter<"Match"> | string | null
    startedAt?: DateTimeFilter<"Match"> | Date | string
    endedAt?: DateTimeNullableFilter<"Match"> | Date | string | null
    user1?: XOR<UserScalarRelationFilter, UserWhereInput>
    user2?: XOR<UserScalarRelationFilter, UserWhereInput>
    room?: XOR<RoomNullableScalarRelationFilter, RoomWhereInput> | null
  }, "id">

  export type MatchOrderByWithAggregationInput = {
    id?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
    roomId?: SortOrderInput | SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    _count?: MatchCountOrderByAggregateInput
    _max?: MatchMaxOrderByAggregateInput
    _min?: MatchMinOrderByAggregateInput
  }

  export type MatchScalarWhereWithAggregatesInput = {
    AND?: MatchScalarWhereWithAggregatesInput | MatchScalarWhereWithAggregatesInput[]
    OR?: MatchScalarWhereWithAggregatesInput[]
    NOT?: MatchScalarWhereWithAggregatesInput | MatchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Match"> | string
    user1Id?: StringWithAggregatesFilter<"Match"> | string
    user2Id?: StringWithAggregatesFilter<"Match"> | string
    roomId?: StringNullableWithAggregatesFilter<"Match"> | string | null
    startedAt?: DateTimeWithAggregatesFilter<"Match"> | Date | string
    endedAt?: DateTimeNullableWithAggregatesFilter<"Match"> | Date | string | null
  }

  export type RoomWhereInput = {
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    id?: StringFilter<"Room"> | string
    isActive?: BoolFilter<"Room"> | boolean
    createdAt?: DateTimeFilter<"Room"> | Date | string
    endedAt?: DateTimeNullableFilter<"Room"> | Date | string | null
    participants?: RoomParticipantListRelationFilter
    messages?: MessageListRelationFilter
    aiEvents?: AITranscriptListRelationFilter
    matches?: MatchListRelationFilter
  }

  export type RoomOrderByWithRelationInput = {
    id?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    participants?: RoomParticipantOrderByRelationAggregateInput
    messages?: MessageOrderByRelationAggregateInput
    aiEvents?: AITranscriptOrderByRelationAggregateInput
    matches?: MatchOrderByRelationAggregateInput
  }

  export type RoomWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    isActive?: BoolFilter<"Room"> | boolean
    createdAt?: DateTimeFilter<"Room"> | Date | string
    endedAt?: DateTimeNullableFilter<"Room"> | Date | string | null
    participants?: RoomParticipantListRelationFilter
    messages?: MessageListRelationFilter
    aiEvents?: AITranscriptListRelationFilter
    matches?: MatchListRelationFilter
  }, "id">

  export type RoomOrderByWithAggregationInput = {
    id?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    _count?: RoomCountOrderByAggregateInput
    _max?: RoomMaxOrderByAggregateInput
    _min?: RoomMinOrderByAggregateInput
  }

  export type RoomScalarWhereWithAggregatesInput = {
    AND?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    OR?: RoomScalarWhereWithAggregatesInput[]
    NOT?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Room"> | string
    isActive?: BoolWithAggregatesFilter<"Room"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Room"> | Date | string
    endedAt?: DateTimeNullableWithAggregatesFilter<"Room"> | Date | string | null
  }

  export type RoomParticipantWhereInput = {
    AND?: RoomParticipantWhereInput | RoomParticipantWhereInput[]
    OR?: RoomParticipantWhereInput[]
    NOT?: RoomParticipantWhereInput | RoomParticipantWhereInput[]
    id?: StringFilter<"RoomParticipant"> | string
    userId?: StringFilter<"RoomParticipant"> | string
    roomId?: StringFilter<"RoomParticipant"> | string
    joinedAt?: DateTimeFilter<"RoomParticipant"> | Date | string
    leftAt?: DateTimeNullableFilter<"RoomParticipant"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
  }

  export type RoomParticipantOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    roomId?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    room?: RoomOrderByWithRelationInput
  }

  export type RoomParticipantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoomParticipantWhereInput | RoomParticipantWhereInput[]
    OR?: RoomParticipantWhereInput[]
    NOT?: RoomParticipantWhereInput | RoomParticipantWhereInput[]
    userId?: StringFilter<"RoomParticipant"> | string
    roomId?: StringFilter<"RoomParticipant"> | string
    joinedAt?: DateTimeFilter<"RoomParticipant"> | Date | string
    leftAt?: DateTimeNullableFilter<"RoomParticipant"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
  }, "id">

  export type RoomParticipantOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    roomId?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrderInput | SortOrder
    _count?: RoomParticipantCountOrderByAggregateInput
    _max?: RoomParticipantMaxOrderByAggregateInput
    _min?: RoomParticipantMinOrderByAggregateInput
  }

  export type RoomParticipantScalarWhereWithAggregatesInput = {
    AND?: RoomParticipantScalarWhereWithAggregatesInput | RoomParticipantScalarWhereWithAggregatesInput[]
    OR?: RoomParticipantScalarWhereWithAggregatesInput[]
    NOT?: RoomParticipantScalarWhereWithAggregatesInput | RoomParticipantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RoomParticipant"> | string
    userId?: StringWithAggregatesFilter<"RoomParticipant"> | string
    roomId?: StringWithAggregatesFilter<"RoomParticipant"> | string
    joinedAt?: DateTimeWithAggregatesFilter<"RoomParticipant"> | Date | string
    leftAt?: DateTimeNullableWithAggregatesFilter<"RoomParticipant"> | Date | string | null
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    senderId?: StringFilter<"Message"> | string
    roomId?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    senderId?: SortOrder
    roomId?: SortOrder
    createdAt?: SortOrder
    sender?: UserOrderByWithRelationInput
    room?: RoomOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    content?: StringFilter<"Message"> | string
    senderId?: StringFilter<"Message"> | string
    roomId?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    senderId?: SortOrder
    roomId?: SortOrder
    createdAt?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Message"> | string
    content?: StringWithAggregatesFilter<"Message"> | string
    senderId?: StringWithAggregatesFilter<"Message"> | string
    roomId?: StringWithAggregatesFilter<"Message"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
  }

  export type MessageWithFreindsWhereInput = {
    AND?: MessageWithFreindsWhereInput | MessageWithFreindsWhereInput[]
    OR?: MessageWithFreindsWhereInput[]
    NOT?: MessageWithFreindsWhereInput | MessageWithFreindsWhereInput[]
    id?: StringFilter<"MessageWithFreinds"> | string
    content?: StringFilter<"MessageWithFreinds"> | string
    type?: EnumMessageTypeFilter<"MessageWithFreinds"> | $Enums.MessageType
    senderId?: StringFilter<"MessageWithFreinds"> | string
    receiverId?: StringFilter<"MessageWithFreinds"> | string
    createdAt?: DateTimeFilter<"MessageWithFreinds"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MessageWithFreindsOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    type?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    createdAt?: SortOrder
    sender?: UserOrderByWithRelationInput
    receiver?: UserOrderByWithRelationInput
  }

  export type MessageWithFreindsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWithFreindsWhereInput | MessageWithFreindsWhereInput[]
    OR?: MessageWithFreindsWhereInput[]
    NOT?: MessageWithFreindsWhereInput | MessageWithFreindsWhereInput[]
    content?: StringFilter<"MessageWithFreinds"> | string
    type?: EnumMessageTypeFilter<"MessageWithFreinds"> | $Enums.MessageType
    senderId?: StringFilter<"MessageWithFreinds"> | string
    receiverId?: StringFilter<"MessageWithFreinds"> | string
    createdAt?: DateTimeFilter<"MessageWithFreinds"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MessageWithFreindsOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    type?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    createdAt?: SortOrder
    _count?: MessageWithFreindsCountOrderByAggregateInput
    _max?: MessageWithFreindsMaxOrderByAggregateInput
    _min?: MessageWithFreindsMinOrderByAggregateInput
  }

  export type MessageWithFreindsScalarWhereWithAggregatesInput = {
    AND?: MessageWithFreindsScalarWhereWithAggregatesInput | MessageWithFreindsScalarWhereWithAggregatesInput[]
    OR?: MessageWithFreindsScalarWhereWithAggregatesInput[]
    NOT?: MessageWithFreindsScalarWhereWithAggregatesInput | MessageWithFreindsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MessageWithFreinds"> | string
    content?: StringWithAggregatesFilter<"MessageWithFreinds"> | string
    type?: EnumMessageTypeWithAggregatesFilter<"MessageWithFreinds"> | $Enums.MessageType
    senderId?: StringWithAggregatesFilter<"MessageWithFreinds"> | string
    receiverId?: StringWithAggregatesFilter<"MessageWithFreinds"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MessageWithFreinds"> | Date | string
  }

  export type AITranscriptWhereInput = {
    AND?: AITranscriptWhereInput | AITranscriptWhereInput[]
    OR?: AITranscriptWhereInput[]
    NOT?: AITranscriptWhereInput | AITranscriptWhereInput[]
    id?: StringFilter<"AITranscript"> | string
    roomId?: StringFilter<"AITranscript"> | string
    userId?: StringFilter<"AITranscript"> | string
    text?: StringFilter<"AITranscript"> | string
    lang?: StringFilter<"AITranscript"> | string
    isTranslated?: BoolFilter<"AITranscript"> | boolean
    translatedText?: StringNullableFilter<"AITranscript"> | string | null
    createdAt?: DateTimeFilter<"AITranscript"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AITranscriptOrderByWithRelationInput = {
    id?: SortOrder
    roomId?: SortOrder
    userId?: SortOrder
    text?: SortOrder
    lang?: SortOrder
    isTranslated?: SortOrder
    translatedText?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    room?: RoomOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type AITranscriptWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AITranscriptWhereInput | AITranscriptWhereInput[]
    OR?: AITranscriptWhereInput[]
    NOT?: AITranscriptWhereInput | AITranscriptWhereInput[]
    roomId?: StringFilter<"AITranscript"> | string
    userId?: StringFilter<"AITranscript"> | string
    text?: StringFilter<"AITranscript"> | string
    lang?: StringFilter<"AITranscript"> | string
    isTranslated?: BoolFilter<"AITranscript"> | boolean
    translatedText?: StringNullableFilter<"AITranscript"> | string | null
    createdAt?: DateTimeFilter<"AITranscript"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AITranscriptOrderByWithAggregationInput = {
    id?: SortOrder
    roomId?: SortOrder
    userId?: SortOrder
    text?: SortOrder
    lang?: SortOrder
    isTranslated?: SortOrder
    translatedText?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AITranscriptCountOrderByAggregateInput
    _max?: AITranscriptMaxOrderByAggregateInput
    _min?: AITranscriptMinOrderByAggregateInput
  }

  export type AITranscriptScalarWhereWithAggregatesInput = {
    AND?: AITranscriptScalarWhereWithAggregatesInput | AITranscriptScalarWhereWithAggregatesInput[]
    OR?: AITranscriptScalarWhereWithAggregatesInput[]
    NOT?: AITranscriptScalarWhereWithAggregatesInput | AITranscriptScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AITranscript"> | string
    roomId?: StringWithAggregatesFilter<"AITranscript"> | string
    userId?: StringWithAggregatesFilter<"AITranscript"> | string
    text?: StringWithAggregatesFilter<"AITranscript"> | string
    lang?: StringWithAggregatesFilter<"AITranscript"> | string
    isTranslated?: BoolWithAggregatesFilter<"AITranscript"> | boolean
    translatedText?: StringNullableWithAggregatesFilter<"AITranscript"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AITranscript"> | Date | string
  }

  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    id?: StringFilter<"Subscription"> | string
    userId?: StringFilter<"Subscription"> | string
    plan?: StringFilter<"Subscription"> | string
    startDate?: DateTimeFilter<"Subscription"> | Date | string
    endDate?: DateTimeFilter<"Subscription"> | Date | string
    razorpayId?: StringNullableFilter<"Subscription"> | string | null
    paymentStatus?: StringFilter<"Subscription"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    plan?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    razorpayId?: SortOrderInput | SortOrder
    paymentStatus?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    userId?: StringFilter<"Subscription"> | string
    plan?: StringFilter<"Subscription"> | string
    startDate?: DateTimeFilter<"Subscription"> | Date | string
    endDate?: DateTimeFilter<"Subscription"> | Date | string
    razorpayId?: StringNullableFilter<"Subscription"> | string | null
    paymentStatus?: StringFilter<"Subscription"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    plan?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    razorpayId?: SortOrderInput | SortOrder
    paymentStatus?: SortOrder
    _count?: SubscriptionCountOrderByAggregateInput
    _max?: SubscriptionMaxOrderByAggregateInput
    _min?: SubscriptionMinOrderByAggregateInput
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    OR?: SubscriptionScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subscription"> | string
    userId?: StringWithAggregatesFilter<"Subscription"> | string
    plan?: StringWithAggregatesFilter<"Subscription"> | string
    startDate?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    razorpayId?: StringNullableWithAggregatesFilter<"Subscription"> | string | null
    paymentStatus?: StringWithAggregatesFilter<"Subscription"> | string
  }

  export type FriendshipWhereInput = {
    AND?: FriendshipWhereInput | FriendshipWhereInput[]
    OR?: FriendshipWhereInput[]
    NOT?: FriendshipWhereInput | FriendshipWhereInput[]
    id?: StringFilter<"Friendship"> | string
    userId?: StringFilter<"Friendship"> | string
    friendId?: StringFilter<"Friendship"> | string
    createdAt?: DateTimeFilter<"Friendship"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    friend?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FriendshipOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    friend?: UserOrderByWithRelationInput
  }

  export type FriendshipWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_friendId?: FriendshipUserIdFriendIdCompoundUniqueInput
    AND?: FriendshipWhereInput | FriendshipWhereInput[]
    OR?: FriendshipWhereInput[]
    NOT?: FriendshipWhereInput | FriendshipWhereInput[]
    userId?: StringFilter<"Friendship"> | string
    friendId?: StringFilter<"Friendship"> | string
    createdAt?: DateTimeFilter<"Friendship"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    friend?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_friendId">

  export type FriendshipOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    createdAt?: SortOrder
    _count?: FriendshipCountOrderByAggregateInput
    _max?: FriendshipMaxOrderByAggregateInput
    _min?: FriendshipMinOrderByAggregateInput
  }

  export type FriendshipScalarWhereWithAggregatesInput = {
    AND?: FriendshipScalarWhereWithAggregatesInput | FriendshipScalarWhereWithAggregatesInput[]
    OR?: FriendshipScalarWhereWithAggregatesInput[]
    NOT?: FriendshipScalarWhereWithAggregatesInput | FriendshipScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Friendship"> | string
    userId?: StringWithAggregatesFilter<"Friendship"> | string
    friendId?: StringWithAggregatesFilter<"Friendship"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Friendship"> | Date | string
  }

  export type ReportWhereInput = {
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    id?: StringFilter<"Report"> | string
    userId?: StringFilter<"Report"> | string
    reportedId?: StringFilter<"Report"> | string
    reason?: StringFilter<"Report"> | string
    createdAt?: DateTimeFilter<"Report"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    reportedUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ReportOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    reportedId?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    reportedUser?: UserOrderByWithRelationInput
  }

  export type ReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_reportedId?: ReportUserIdReportedIdCompoundUniqueInput
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    userId?: StringFilter<"Report"> | string
    reportedId?: StringFilter<"Report"> | string
    reason?: StringFilter<"Report"> | string
    createdAt?: DateTimeFilter<"Report"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    reportedUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_reportedId">

  export type ReportOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    reportedId?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    _count?: ReportCountOrderByAggregateInput
    _max?: ReportMaxOrderByAggregateInput
    _min?: ReportMinOrderByAggregateInput
  }

  export type ReportScalarWhereWithAggregatesInput = {
    AND?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    OR?: ReportScalarWhereWithAggregatesInput[]
    NOT?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Report"> | string
    userId?: StringWithAggregatesFilter<"Report"> | string
    reportedId?: StringWithAggregatesFilter<"Report"> | string
    reason?: StringWithAggregatesFilter<"Report"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Report"> | Date | string
  }

  export type HistoryWhereInput = {
    AND?: HistoryWhereInput | HistoryWhereInput[]
    OR?: HistoryWhereInput[]
    NOT?: HistoryWhereInput | HistoryWhereInput[]
    id?: StringFilter<"History"> | string
    user1Id?: StringFilter<"History"> | string
    user2Id?: StringFilter<"History"> | string
    roomId?: StringNullableFilter<"History"> | string | null
    startedAt?: DateTimeFilter<"History"> | Date | string
    endedAt?: DateTimeNullableFilter<"History"> | Date | string | null
    user1?: XOR<UserScalarRelationFilter, UserWhereInput>
    user2?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type HistoryOrderByWithRelationInput = {
    id?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
    roomId?: SortOrderInput | SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    user1?: UserOrderByWithRelationInput
    user2?: UserOrderByWithRelationInput
  }

  export type HistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HistoryWhereInput | HistoryWhereInput[]
    OR?: HistoryWhereInput[]
    NOT?: HistoryWhereInput | HistoryWhereInput[]
    user1Id?: StringFilter<"History"> | string
    user2Id?: StringFilter<"History"> | string
    roomId?: StringNullableFilter<"History"> | string | null
    startedAt?: DateTimeFilter<"History"> | Date | string
    endedAt?: DateTimeNullableFilter<"History"> | Date | string | null
    user1?: XOR<UserScalarRelationFilter, UserWhereInput>
    user2?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type HistoryOrderByWithAggregationInput = {
    id?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
    roomId?: SortOrderInput | SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    _count?: HistoryCountOrderByAggregateInput
    _max?: HistoryMaxOrderByAggregateInput
    _min?: HistoryMinOrderByAggregateInput
  }

  export type HistoryScalarWhereWithAggregatesInput = {
    AND?: HistoryScalarWhereWithAggregatesInput | HistoryScalarWhereWithAggregatesInput[]
    OR?: HistoryScalarWhereWithAggregatesInput[]
    NOT?: HistoryScalarWhereWithAggregatesInput | HistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"History"> | string
    user1Id?: StringWithAggregatesFilter<"History"> | string
    user2Id?: StringWithAggregatesFilter<"History"> | string
    roomId?: StringNullableWithAggregatesFilter<"History"> | string | null
    startedAt?: DateTimeWithAggregatesFilter<"History"> | Date | string
    endedAt?: DateTimeNullableWithAggregatesFilter<"History"> | Date | string | null
  }

  export type ContactWhereInput = {
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    id?: StringFilter<"Contact"> | string
    name?: StringFilter<"Contact"> | string
    email?: StringFilter<"Contact"> | string
    subject?: StringFilter<"Contact"> | string
    message?: StringFilter<"Contact"> | string
    createdAt?: DateTimeFilter<"Contact"> | Date | string
  }

  export type ContactOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    name?: StringFilter<"Contact"> | string
    email?: StringFilter<"Contact"> | string
    subject?: StringFilter<"Contact"> | string
    message?: StringFilter<"Contact"> | string
    createdAt?: DateTimeFilter<"Contact"> | Date | string
  }, "id">

  export type ContactOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    _count?: ContactCountOrderByAggregateInput
    _max?: ContactMaxOrderByAggregateInput
    _min?: ContactMinOrderByAggregateInput
  }

  export type ContactScalarWhereWithAggregatesInput = {
    AND?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    OR?: ContactScalarWhereWithAggregatesInput[]
    NOT?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Contact"> | string
    name?: StringWithAggregatesFilter<"Contact"> | string
    email?: StringWithAggregatesFilter<"Contact"> | string
    subject?: StringWithAggregatesFilter<"Contact"> | string
    message?: StringWithAggregatesFilter<"Contact"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Contact"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    gender: $Enums.Gender
    dob?: Date | string
    country?: string | null
    state?: string | null
    city?: string | null
    latitude?: number | null
    longitude?: number | null
    isPremium?: boolean
    interests?: UserCreateinterestsInput | $Enums.Interest[]
    preferredLang?: UserCreatepreferredLangInput | $Enums.Language[]
    createdAt?: Date | string
    updatedAt?: Date | string
    matchesAsUser1?: MatchCreateNestedManyWithoutUser1Input
    matchesAsUser2?: MatchCreateNestedManyWithoutUser2Input
    historyAsUser1?: HistoryCreateNestedManyWithoutUser1Input
    historyAsUser2?: HistoryCreateNestedManyWithoutUser2Input
    roomsJoined?: RoomParticipantCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    aitranscripts?: AITranscriptCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    sentFriends?: FriendshipCreateNestedManyWithoutUserInput
    receivedFriends?: FriendshipCreateNestedManyWithoutFriendInput
    userReported?: ReportCreateNestedManyWithoutUserInput
    reportedUser?: ReportCreateNestedManyWithoutReportedUserInput
    messagesenderperson?: MessageWithFreindsCreateNestedManyWithoutSenderInput
    messagereceiverperson?: MessageWithFreindsCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    gender: $Enums.Gender
    dob?: Date | string
    country?: string | null
    state?: string | null
    city?: string | null
    latitude?: number | null
    longitude?: number | null
    isPremium?: boolean
    interests?: UserCreateinterestsInput | $Enums.Interest[]
    preferredLang?: UserCreatepreferredLangInput | $Enums.Language[]
    createdAt?: Date | string
    updatedAt?: Date | string
    matchesAsUser1?: MatchUncheckedCreateNestedManyWithoutUser1Input
    matchesAsUser2?: MatchUncheckedCreateNestedManyWithoutUser2Input
    historyAsUser1?: HistoryUncheckedCreateNestedManyWithoutUser1Input
    historyAsUser2?: HistoryUncheckedCreateNestedManyWithoutUser2Input
    roomsJoined?: RoomParticipantUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    aitranscripts?: AITranscriptUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    sentFriends?: FriendshipUncheckedCreateNestedManyWithoutUserInput
    receivedFriends?: FriendshipUncheckedCreateNestedManyWithoutFriendInput
    userReported?: ReportUncheckedCreateNestedManyWithoutUserInput
    reportedUser?: ReportUncheckedCreateNestedManyWithoutReportedUserInput
    messagesenderperson?: MessageWithFreindsUncheckedCreateNestedManyWithoutSenderInput
    messagereceiverperson?: MessageWithFreindsUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | $Enums.Interest[]
    preferredLang?: UserUpdatepreferredLangInput | $Enums.Language[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchesAsUser1?: MatchUpdateManyWithoutUser1NestedInput
    matchesAsUser2?: MatchUpdateManyWithoutUser2NestedInput
    historyAsUser1?: HistoryUpdateManyWithoutUser1NestedInput
    historyAsUser2?: HistoryUpdateManyWithoutUser2NestedInput
    roomsJoined?: RoomParticipantUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    aitranscripts?: AITranscriptUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    sentFriends?: FriendshipUpdateManyWithoutUserNestedInput
    receivedFriends?: FriendshipUpdateManyWithoutFriendNestedInput
    userReported?: ReportUpdateManyWithoutUserNestedInput
    reportedUser?: ReportUpdateManyWithoutReportedUserNestedInput
    messagesenderperson?: MessageWithFreindsUpdateManyWithoutSenderNestedInput
    messagereceiverperson?: MessageWithFreindsUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | $Enums.Interest[]
    preferredLang?: UserUpdatepreferredLangInput | $Enums.Language[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchesAsUser1?: MatchUncheckedUpdateManyWithoutUser1NestedInput
    matchesAsUser2?: MatchUncheckedUpdateManyWithoutUser2NestedInput
    historyAsUser1?: HistoryUncheckedUpdateManyWithoutUser1NestedInput
    historyAsUser2?: HistoryUncheckedUpdateManyWithoutUser2NestedInput
    roomsJoined?: RoomParticipantUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    aitranscripts?: AITranscriptUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    sentFriends?: FriendshipUncheckedUpdateManyWithoutUserNestedInput
    receivedFriends?: FriendshipUncheckedUpdateManyWithoutFriendNestedInput
    userReported?: ReportUncheckedUpdateManyWithoutUserNestedInput
    reportedUser?: ReportUncheckedUpdateManyWithoutReportedUserNestedInput
    messagesenderperson?: MessageWithFreindsUncheckedUpdateManyWithoutSenderNestedInput
    messagereceiverperson?: MessageWithFreindsUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    gender: $Enums.Gender
    dob?: Date | string
    country?: string | null
    state?: string | null
    city?: string | null
    latitude?: number | null
    longitude?: number | null
    isPremium?: boolean
    interests?: UserCreateinterestsInput | $Enums.Interest[]
    preferredLang?: UserCreatepreferredLangInput | $Enums.Language[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | $Enums.Interest[]
    preferredLang?: UserUpdatepreferredLangInput | $Enums.Language[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | $Enums.Interest[]
    preferredLang?: UserUpdatepreferredLangInput | $Enums.Language[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchCreateInput = {
    id?: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    user1: UserCreateNestedOneWithoutMatchesAsUser1Input
    user2: UserCreateNestedOneWithoutMatchesAsUser2Input
    room?: RoomCreateNestedOneWithoutMatchesInput
  }

  export type MatchUncheckedCreateInput = {
    id?: string
    user1Id: string
    user2Id: string
    roomId?: string | null
    startedAt?: Date | string
    endedAt?: Date | string | null
  }

  export type MatchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user1?: UserUpdateOneRequiredWithoutMatchesAsUser1NestedInput
    user2?: UserUpdateOneRequiredWithoutMatchesAsUser2NestedInput
    room?: RoomUpdateOneWithoutMatchesNestedInput
  }

  export type MatchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user1Id?: StringFieldUpdateOperationsInput | string
    user2Id?: StringFieldUpdateOperationsInput | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MatchCreateManyInput = {
    id?: string
    user1Id: string
    user2Id: string
    roomId?: string | null
    startedAt?: Date | string
    endedAt?: Date | string | null
  }

  export type MatchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MatchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user1Id?: StringFieldUpdateOperationsInput | string
    user2Id?: StringFieldUpdateOperationsInput | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoomCreateInput = {
    id?: string
    isActive?: boolean
    createdAt?: Date | string
    endedAt?: Date | string | null
    participants?: RoomParticipantCreateNestedManyWithoutRoomInput
    messages?: MessageCreateNestedManyWithoutRoomInput
    aiEvents?: AITranscriptCreateNestedManyWithoutRoomInput
    matches?: MatchCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateInput = {
    id?: string
    isActive?: boolean
    createdAt?: Date | string
    endedAt?: Date | string | null
    participants?: RoomParticipantUncheckedCreateNestedManyWithoutRoomInput
    messages?: MessageUncheckedCreateNestedManyWithoutRoomInput
    aiEvents?: AITranscriptUncheckedCreateNestedManyWithoutRoomInput
    matches?: MatchUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    participants?: RoomParticipantUpdateManyWithoutRoomNestedInput
    messages?: MessageUpdateManyWithoutRoomNestedInput
    aiEvents?: AITranscriptUpdateManyWithoutRoomNestedInput
    matches?: MatchUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    participants?: RoomParticipantUncheckedUpdateManyWithoutRoomNestedInput
    messages?: MessageUncheckedUpdateManyWithoutRoomNestedInput
    aiEvents?: AITranscriptUncheckedUpdateManyWithoutRoomNestedInput
    matches?: MatchUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomCreateManyInput = {
    id?: string
    isActive?: boolean
    createdAt?: Date | string
    endedAt?: Date | string | null
  }

  export type RoomUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoomUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoomParticipantCreateInput = {
    id?: string
    joinedAt?: Date | string
    leftAt?: Date | string | null
    user: UserCreateNestedOneWithoutRoomsJoinedInput
    room: RoomCreateNestedOneWithoutParticipantsInput
  }

  export type RoomParticipantUncheckedCreateInput = {
    id?: string
    userId: string
    roomId: string
    joinedAt?: Date | string
    leftAt?: Date | string | null
  }

  export type RoomParticipantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutRoomsJoinedNestedInput
    room?: RoomUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type RoomParticipantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoomParticipantCreateManyInput = {
    id?: string
    userId: string
    roomId: string
    joinedAt?: Date | string
    leftAt?: Date | string | null
  }

  export type RoomParticipantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoomParticipantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MessageCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutMessagesInput
    room: RoomCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    content: string
    senderId: string
    roomId: string
    createdAt?: Date | string
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutMessagesNestedInput
    room?: RoomUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyInput = {
    id?: string
    content: string
    senderId: string
    roomId: string
    createdAt?: Date | string
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageWithFreindsCreateInput = {
    id?: string
    content: string
    type?: $Enums.MessageType
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutMessagesenderpersonInput
    receiver: UserCreateNestedOneWithoutMessagereceiverpersonInput
  }

  export type MessageWithFreindsUncheckedCreateInput = {
    id?: string
    content: string
    type?: $Enums.MessageType
    senderId: string
    receiverId: string
    createdAt?: Date | string
  }

  export type MessageWithFreindsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutMessagesenderpersonNestedInput
    receiver?: UserUpdateOneRequiredWithoutMessagereceiverpersonNestedInput
  }

  export type MessageWithFreindsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageWithFreindsCreateManyInput = {
    id?: string
    content: string
    type?: $Enums.MessageType
    senderId: string
    receiverId: string
    createdAt?: Date | string
  }

  export type MessageWithFreindsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageWithFreindsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AITranscriptCreateInput = {
    id?: string
    text: string
    lang: string
    isTranslated?: boolean
    translatedText?: string | null
    createdAt?: Date | string
    room: RoomCreateNestedOneWithoutAiEventsInput
    user: UserCreateNestedOneWithoutAitranscriptsInput
  }

  export type AITranscriptUncheckedCreateInput = {
    id?: string
    roomId: string
    userId: string
    text: string
    lang: string
    isTranslated?: boolean
    translatedText?: string | null
    createdAt?: Date | string
  }

  export type AITranscriptUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    isTranslated?: BoolFieldUpdateOperationsInput | boolean
    translatedText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutAiEventsNestedInput
    user?: UserUpdateOneRequiredWithoutAitranscriptsNestedInput
  }

  export type AITranscriptUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    isTranslated?: BoolFieldUpdateOperationsInput | boolean
    translatedText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AITranscriptCreateManyInput = {
    id?: string
    roomId: string
    userId: string
    text: string
    lang: string
    isTranslated?: boolean
    translatedText?: string | null
    createdAt?: Date | string
  }

  export type AITranscriptUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    isTranslated?: BoolFieldUpdateOperationsInput | boolean
    translatedText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AITranscriptUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    isTranslated?: BoolFieldUpdateOperationsInput | boolean
    translatedText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateInput = {
    id?: string
    plan: string
    startDate?: Date | string
    endDate: Date | string
    razorpayId?: string | null
    paymentStatus?: string
    user: UserCreateNestedOneWithoutSubscriptionsInput
  }

  export type SubscriptionUncheckedCreateInput = {
    id?: string
    userId: string
    plan: string
    startDate?: Date | string
    endDate: Date | string
    razorpayId?: string | null
    paymentStatus?: string
  }

  export type SubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    razorpayId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutSubscriptionsNestedInput
  }

  export type SubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    razorpayId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: StringFieldUpdateOperationsInput | string
  }

  export type SubscriptionCreateManyInput = {
    id?: string
    userId: string
    plan: string
    startDate?: Date | string
    endDate: Date | string
    razorpayId?: string | null
    paymentStatus?: string
  }

  export type SubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    razorpayId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: StringFieldUpdateOperationsInput | string
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    razorpayId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: StringFieldUpdateOperationsInput | string
  }

  export type FriendshipCreateInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSentFriendsInput
    friend: UserCreateNestedOneWithoutReceivedFriendsInput
  }

  export type FriendshipUncheckedCreateInput = {
    id?: string
    userId: string
    friendId: string
    createdAt?: Date | string
  }

  export type FriendshipUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSentFriendsNestedInput
    friend?: UserUpdateOneRequiredWithoutReceivedFriendsNestedInput
  }

  export type FriendshipUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    friendId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipCreateManyInput = {
    id?: string
    userId: string
    friendId: string
    createdAt?: Date | string
  }

  export type FriendshipUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    friendId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCreateInput = {
    id?: string
    reason: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutUserReportedInput
    reportedUser: UserCreateNestedOneWithoutReportedUserInput
  }

  export type ReportUncheckedCreateInput = {
    id?: string
    userId: string
    reportedId: string
    reason: string
    createdAt?: Date | string
  }

  export type ReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserReportedNestedInput
    reportedUser?: UserUpdateOneRequiredWithoutReportedUserNestedInput
  }

  export type ReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    reportedId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCreateManyInput = {
    id?: string
    userId: string
    reportedId: string
    reason: string
    createdAt?: Date | string
  }

  export type ReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    reportedId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoryCreateInput = {
    id?: string
    roomId?: string | null
    startedAt?: Date | string
    endedAt?: Date | string | null
    user1: UserCreateNestedOneWithoutHistoryAsUser1Input
    user2: UserCreateNestedOneWithoutHistoryAsUser2Input
  }

  export type HistoryUncheckedCreateInput = {
    id?: string
    user1Id: string
    user2Id: string
    roomId?: string | null
    startedAt?: Date | string
    endedAt?: Date | string | null
  }

  export type HistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user1?: UserUpdateOneRequiredWithoutHistoryAsUser1NestedInput
    user2?: UserUpdateOneRequiredWithoutHistoryAsUser2NestedInput
  }

  export type HistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user1Id?: StringFieldUpdateOperationsInput | string
    user2Id?: StringFieldUpdateOperationsInput | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type HistoryCreateManyInput = {
    id?: string
    user1Id: string
    user2Id: string
    roomId?: string | null
    startedAt?: Date | string
    endedAt?: Date | string | null
  }

  export type HistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type HistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user1Id?: StringFieldUpdateOperationsInput | string
    user2Id?: StringFieldUpdateOperationsInput | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ContactCreateInput = {
    id?: string
    name: string
    email: string
    subject: string
    message: string
    createdAt?: Date | string
  }

  export type ContactUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    subject: string
    message: string
    createdAt?: Date | string
  }

  export type ContactUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactCreateManyInput = {
    id?: string
    name: string
    email: string
    subject: string
    message: string
    createdAt?: Date | string
  }

  export type ContactUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumInterestNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.Interest[] | ListEnumInterestFieldRefInput<$PrismaModel> | null
    has?: $Enums.Interest | EnumInterestFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.Interest[] | ListEnumInterestFieldRefInput<$PrismaModel>
    hasSome?: $Enums.Interest[] | ListEnumInterestFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumLanguageNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.Language[] | ListEnumLanguageFieldRefInput<$PrismaModel> | null
    has?: $Enums.Language | EnumLanguageFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.Language[] | ListEnumLanguageFieldRefInput<$PrismaModel>
    hasSome?: $Enums.Language[] | ListEnumLanguageFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type MatchListRelationFilter = {
    every?: MatchWhereInput
    some?: MatchWhereInput
    none?: MatchWhereInput
  }

  export type HistoryListRelationFilter = {
    every?: HistoryWhereInput
    some?: HistoryWhereInput
    none?: HistoryWhereInput
  }

  export type RoomParticipantListRelationFilter = {
    every?: RoomParticipantWhereInput
    some?: RoomParticipantWhereInput
    none?: RoomParticipantWhereInput
  }

  export type SubscriptionListRelationFilter = {
    every?: SubscriptionWhereInput
    some?: SubscriptionWhereInput
    none?: SubscriptionWhereInput
  }

  export type AITranscriptListRelationFilter = {
    every?: AITranscriptWhereInput
    some?: AITranscriptWhereInput
    none?: AITranscriptWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type FriendshipListRelationFilter = {
    every?: FriendshipWhereInput
    some?: FriendshipWhereInput
    none?: FriendshipWhereInput
  }

  export type ReportListRelationFilter = {
    every?: ReportWhereInput
    some?: ReportWhereInput
    none?: ReportWhereInput
  }

  export type MessageWithFreindsListRelationFilter = {
    every?: MessageWithFreindsWhereInput
    some?: MessageWithFreindsWhereInput
    none?: MessageWithFreindsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MatchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomParticipantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AITranscriptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FriendshipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageWithFreindsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    gender?: SortOrder
    dob?: SortOrder
    country?: SortOrder
    state?: SortOrder
    city?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    isPremium?: SortOrder
    interests?: SortOrder
    preferredLang?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    gender?: SortOrder
    dob?: SortOrder
    country?: SortOrder
    state?: SortOrder
    city?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    isPremium?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    gender?: SortOrder
    dob?: SortOrder
    country?: SortOrder
    state?: SortOrder
    city?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    isPremium?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RoomNullableScalarRelationFilter = {
    is?: RoomWhereInput | null
    isNot?: RoomWhereInput | null
  }

  export type MatchCountOrderByAggregateInput = {
    id?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
    roomId?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
  }

  export type MatchMaxOrderByAggregateInput = {
    id?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
    roomId?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
  }

  export type MatchMinOrderByAggregateInput = {
    id?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
    roomId?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type RoomCountOrderByAggregateInput = {
    id?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    endedAt?: SortOrder
  }

  export type RoomMaxOrderByAggregateInput = {
    id?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    endedAt?: SortOrder
  }

  export type RoomMinOrderByAggregateInput = {
    id?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    endedAt?: SortOrder
  }

  export type RoomScalarRelationFilter = {
    is?: RoomWhereInput
    isNot?: RoomWhereInput
  }

  export type RoomParticipantCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roomId?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrder
  }

  export type RoomParticipantMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roomId?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrder
  }

  export type RoomParticipantMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roomId?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrder
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    senderId?: SortOrder
    roomId?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    senderId?: SortOrder
    roomId?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    senderId?: SortOrder
    roomId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumMessageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypeFilter<$PrismaModel> | $Enums.MessageType
  }

  export type MessageWithFreindsCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    type?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageWithFreindsMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    type?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageWithFreindsMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    type?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumMessageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypeWithAggregatesFilter<$PrismaModel> | $Enums.MessageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageTypeFilter<$PrismaModel>
    _max?: NestedEnumMessageTypeFilter<$PrismaModel>
  }

  export type AITranscriptCountOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    userId?: SortOrder
    text?: SortOrder
    lang?: SortOrder
    isTranslated?: SortOrder
    translatedText?: SortOrder
    createdAt?: SortOrder
  }

  export type AITranscriptMaxOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    userId?: SortOrder
    text?: SortOrder
    lang?: SortOrder
    isTranslated?: SortOrder
    translatedText?: SortOrder
    createdAt?: SortOrder
  }

  export type AITranscriptMinOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    userId?: SortOrder
    text?: SortOrder
    lang?: SortOrder
    isTranslated?: SortOrder
    translatedText?: SortOrder
    createdAt?: SortOrder
  }

  export type SubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    plan?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    razorpayId?: SortOrder
    paymentStatus?: SortOrder
  }

  export type SubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    plan?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    razorpayId?: SortOrder
    paymentStatus?: SortOrder
  }

  export type SubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    plan?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    razorpayId?: SortOrder
    paymentStatus?: SortOrder
  }

  export type FriendshipUserIdFriendIdCompoundUniqueInput = {
    userId: string
    friendId: string
  }

  export type FriendshipCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    createdAt?: SortOrder
  }

  export type FriendshipMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    createdAt?: SortOrder
  }

  export type FriendshipMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    createdAt?: SortOrder
  }

  export type ReportUserIdReportedIdCompoundUniqueInput = {
    userId: string
    reportedId: string
  }

  export type ReportCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    reportedId?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type ReportMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    reportedId?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type ReportMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    reportedId?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type HistoryCountOrderByAggregateInput = {
    id?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
    roomId?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
  }

  export type HistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
    roomId?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
  }

  export type HistoryMinOrderByAggregateInput = {
    id?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
    roomId?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
  }

  export type ContactCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type UserCreateinterestsInput = {
    set: $Enums.Interest[]
  }

  export type UserCreatepreferredLangInput = {
    set: $Enums.Language[]
  }

  export type MatchCreateNestedManyWithoutUser1Input = {
    create?: XOR<MatchCreateWithoutUser1Input, MatchUncheckedCreateWithoutUser1Input> | MatchCreateWithoutUser1Input[] | MatchUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: MatchCreateOrConnectWithoutUser1Input | MatchCreateOrConnectWithoutUser1Input[]
    createMany?: MatchCreateManyUser1InputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchCreateNestedManyWithoutUser2Input = {
    create?: XOR<MatchCreateWithoutUser2Input, MatchUncheckedCreateWithoutUser2Input> | MatchCreateWithoutUser2Input[] | MatchUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: MatchCreateOrConnectWithoutUser2Input | MatchCreateOrConnectWithoutUser2Input[]
    createMany?: MatchCreateManyUser2InputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type HistoryCreateNestedManyWithoutUser1Input = {
    create?: XOR<HistoryCreateWithoutUser1Input, HistoryUncheckedCreateWithoutUser1Input> | HistoryCreateWithoutUser1Input[] | HistoryUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: HistoryCreateOrConnectWithoutUser1Input | HistoryCreateOrConnectWithoutUser1Input[]
    createMany?: HistoryCreateManyUser1InputEnvelope
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
  }

  export type HistoryCreateNestedManyWithoutUser2Input = {
    create?: XOR<HistoryCreateWithoutUser2Input, HistoryUncheckedCreateWithoutUser2Input> | HistoryCreateWithoutUser2Input[] | HistoryUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: HistoryCreateOrConnectWithoutUser2Input | HistoryCreateOrConnectWithoutUser2Input[]
    createMany?: HistoryCreateManyUser2InputEnvelope
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
  }

  export type RoomParticipantCreateNestedManyWithoutUserInput = {
    create?: XOR<RoomParticipantCreateWithoutUserInput, RoomParticipantUncheckedCreateWithoutUserInput> | RoomParticipantCreateWithoutUserInput[] | RoomParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoomParticipantCreateOrConnectWithoutUserInput | RoomParticipantCreateOrConnectWithoutUserInput[]
    createMany?: RoomParticipantCreateManyUserInputEnvelope
    connect?: RoomParticipantWhereUniqueInput | RoomParticipantWhereUniqueInput[]
  }

  export type SubscriptionCreateNestedManyWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type AITranscriptCreateNestedManyWithoutUserInput = {
    create?: XOR<AITranscriptCreateWithoutUserInput, AITranscriptUncheckedCreateWithoutUserInput> | AITranscriptCreateWithoutUserInput[] | AITranscriptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AITranscriptCreateOrConnectWithoutUserInput | AITranscriptCreateOrConnectWithoutUserInput[]
    createMany?: AITranscriptCreateManyUserInputEnvelope
    connect?: AITranscriptWhereUniqueInput | AITranscriptWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type FriendshipCreateNestedManyWithoutUserInput = {
    create?: XOR<FriendshipCreateWithoutUserInput, FriendshipUncheckedCreateWithoutUserInput> | FriendshipCreateWithoutUserInput[] | FriendshipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutUserInput | FriendshipCreateOrConnectWithoutUserInput[]
    createMany?: FriendshipCreateManyUserInputEnvelope
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
  }

  export type FriendshipCreateNestedManyWithoutFriendInput = {
    create?: XOR<FriendshipCreateWithoutFriendInput, FriendshipUncheckedCreateWithoutFriendInput> | FriendshipCreateWithoutFriendInput[] | FriendshipUncheckedCreateWithoutFriendInput[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutFriendInput | FriendshipCreateOrConnectWithoutFriendInput[]
    createMany?: FriendshipCreateManyFriendInputEnvelope
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
  }

  export type ReportCreateNestedManyWithoutUserInput = {
    create?: XOR<ReportCreateWithoutUserInput, ReportUncheckedCreateWithoutUserInput> | ReportCreateWithoutUserInput[] | ReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutUserInput | ReportCreateOrConnectWithoutUserInput[]
    createMany?: ReportCreateManyUserInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type ReportCreateNestedManyWithoutReportedUserInput = {
    create?: XOR<ReportCreateWithoutReportedUserInput, ReportUncheckedCreateWithoutReportedUserInput> | ReportCreateWithoutReportedUserInput[] | ReportUncheckedCreateWithoutReportedUserInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutReportedUserInput | ReportCreateOrConnectWithoutReportedUserInput[]
    createMany?: ReportCreateManyReportedUserInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type MessageWithFreindsCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageWithFreindsCreateWithoutSenderInput, MessageWithFreindsUncheckedCreateWithoutSenderInput> | MessageWithFreindsCreateWithoutSenderInput[] | MessageWithFreindsUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageWithFreindsCreateOrConnectWithoutSenderInput | MessageWithFreindsCreateOrConnectWithoutSenderInput[]
    createMany?: MessageWithFreindsCreateManySenderInputEnvelope
    connect?: MessageWithFreindsWhereUniqueInput | MessageWithFreindsWhereUniqueInput[]
  }

  export type MessageWithFreindsCreateNestedManyWithoutReceiverInput = {
    create?: XOR<MessageWithFreindsCreateWithoutReceiverInput, MessageWithFreindsUncheckedCreateWithoutReceiverInput> | MessageWithFreindsCreateWithoutReceiverInput[] | MessageWithFreindsUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageWithFreindsCreateOrConnectWithoutReceiverInput | MessageWithFreindsCreateOrConnectWithoutReceiverInput[]
    createMany?: MessageWithFreindsCreateManyReceiverInputEnvelope
    connect?: MessageWithFreindsWhereUniqueInput | MessageWithFreindsWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutUser1Input = {
    create?: XOR<MatchCreateWithoutUser1Input, MatchUncheckedCreateWithoutUser1Input> | MatchCreateWithoutUser1Input[] | MatchUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: MatchCreateOrConnectWithoutUser1Input | MatchCreateOrConnectWithoutUser1Input[]
    createMany?: MatchCreateManyUser1InputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutUser2Input = {
    create?: XOR<MatchCreateWithoutUser2Input, MatchUncheckedCreateWithoutUser2Input> | MatchCreateWithoutUser2Input[] | MatchUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: MatchCreateOrConnectWithoutUser2Input | MatchCreateOrConnectWithoutUser2Input[]
    createMany?: MatchCreateManyUser2InputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type HistoryUncheckedCreateNestedManyWithoutUser1Input = {
    create?: XOR<HistoryCreateWithoutUser1Input, HistoryUncheckedCreateWithoutUser1Input> | HistoryCreateWithoutUser1Input[] | HistoryUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: HistoryCreateOrConnectWithoutUser1Input | HistoryCreateOrConnectWithoutUser1Input[]
    createMany?: HistoryCreateManyUser1InputEnvelope
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
  }

  export type HistoryUncheckedCreateNestedManyWithoutUser2Input = {
    create?: XOR<HistoryCreateWithoutUser2Input, HistoryUncheckedCreateWithoutUser2Input> | HistoryCreateWithoutUser2Input[] | HistoryUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: HistoryCreateOrConnectWithoutUser2Input | HistoryCreateOrConnectWithoutUser2Input[]
    createMany?: HistoryCreateManyUser2InputEnvelope
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
  }

  export type RoomParticipantUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RoomParticipantCreateWithoutUserInput, RoomParticipantUncheckedCreateWithoutUserInput> | RoomParticipantCreateWithoutUserInput[] | RoomParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoomParticipantCreateOrConnectWithoutUserInput | RoomParticipantCreateOrConnectWithoutUserInput[]
    createMany?: RoomParticipantCreateManyUserInputEnvelope
    connect?: RoomParticipantWhereUniqueInput | RoomParticipantWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type AITranscriptUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AITranscriptCreateWithoutUserInput, AITranscriptUncheckedCreateWithoutUserInput> | AITranscriptCreateWithoutUserInput[] | AITranscriptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AITranscriptCreateOrConnectWithoutUserInput | AITranscriptCreateOrConnectWithoutUserInput[]
    createMany?: AITranscriptCreateManyUserInputEnvelope
    connect?: AITranscriptWhereUniqueInput | AITranscriptWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type FriendshipUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FriendshipCreateWithoutUserInput, FriendshipUncheckedCreateWithoutUserInput> | FriendshipCreateWithoutUserInput[] | FriendshipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutUserInput | FriendshipCreateOrConnectWithoutUserInput[]
    createMany?: FriendshipCreateManyUserInputEnvelope
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
  }

  export type FriendshipUncheckedCreateNestedManyWithoutFriendInput = {
    create?: XOR<FriendshipCreateWithoutFriendInput, FriendshipUncheckedCreateWithoutFriendInput> | FriendshipCreateWithoutFriendInput[] | FriendshipUncheckedCreateWithoutFriendInput[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutFriendInput | FriendshipCreateOrConnectWithoutFriendInput[]
    createMany?: FriendshipCreateManyFriendInputEnvelope
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
  }

  export type ReportUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReportCreateWithoutUserInput, ReportUncheckedCreateWithoutUserInput> | ReportCreateWithoutUserInput[] | ReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutUserInput | ReportCreateOrConnectWithoutUserInput[]
    createMany?: ReportCreateManyUserInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type ReportUncheckedCreateNestedManyWithoutReportedUserInput = {
    create?: XOR<ReportCreateWithoutReportedUserInput, ReportUncheckedCreateWithoutReportedUserInput> | ReportCreateWithoutReportedUserInput[] | ReportUncheckedCreateWithoutReportedUserInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutReportedUserInput | ReportCreateOrConnectWithoutReportedUserInput[]
    createMany?: ReportCreateManyReportedUserInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type MessageWithFreindsUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageWithFreindsCreateWithoutSenderInput, MessageWithFreindsUncheckedCreateWithoutSenderInput> | MessageWithFreindsCreateWithoutSenderInput[] | MessageWithFreindsUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageWithFreindsCreateOrConnectWithoutSenderInput | MessageWithFreindsCreateOrConnectWithoutSenderInput[]
    createMany?: MessageWithFreindsCreateManySenderInputEnvelope
    connect?: MessageWithFreindsWhereUniqueInput | MessageWithFreindsWhereUniqueInput[]
  }

  export type MessageWithFreindsUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<MessageWithFreindsCreateWithoutReceiverInput, MessageWithFreindsUncheckedCreateWithoutReceiverInput> | MessageWithFreindsCreateWithoutReceiverInput[] | MessageWithFreindsUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageWithFreindsCreateOrConnectWithoutReceiverInput | MessageWithFreindsCreateOrConnectWithoutReceiverInput[]
    createMany?: MessageWithFreindsCreateManyReceiverInputEnvelope
    connect?: MessageWithFreindsWhereUniqueInput | MessageWithFreindsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateinterestsInput = {
    set?: $Enums.Interest[]
    push?: $Enums.Interest | $Enums.Interest[]
  }

  export type UserUpdatepreferredLangInput = {
    set?: $Enums.Language[]
    push?: $Enums.Language | $Enums.Language[]
  }

  export type MatchUpdateManyWithoutUser1NestedInput = {
    create?: XOR<MatchCreateWithoutUser1Input, MatchUncheckedCreateWithoutUser1Input> | MatchCreateWithoutUser1Input[] | MatchUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: MatchCreateOrConnectWithoutUser1Input | MatchCreateOrConnectWithoutUser1Input[]
    upsert?: MatchUpsertWithWhereUniqueWithoutUser1Input | MatchUpsertWithWhereUniqueWithoutUser1Input[]
    createMany?: MatchCreateManyUser1InputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutUser1Input | MatchUpdateWithWhereUniqueWithoutUser1Input[]
    updateMany?: MatchUpdateManyWithWhereWithoutUser1Input | MatchUpdateManyWithWhereWithoutUser1Input[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUpdateManyWithoutUser2NestedInput = {
    create?: XOR<MatchCreateWithoutUser2Input, MatchUncheckedCreateWithoutUser2Input> | MatchCreateWithoutUser2Input[] | MatchUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: MatchCreateOrConnectWithoutUser2Input | MatchCreateOrConnectWithoutUser2Input[]
    upsert?: MatchUpsertWithWhereUniqueWithoutUser2Input | MatchUpsertWithWhereUniqueWithoutUser2Input[]
    createMany?: MatchCreateManyUser2InputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutUser2Input | MatchUpdateWithWhereUniqueWithoutUser2Input[]
    updateMany?: MatchUpdateManyWithWhereWithoutUser2Input | MatchUpdateManyWithWhereWithoutUser2Input[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type HistoryUpdateManyWithoutUser1NestedInput = {
    create?: XOR<HistoryCreateWithoutUser1Input, HistoryUncheckedCreateWithoutUser1Input> | HistoryCreateWithoutUser1Input[] | HistoryUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: HistoryCreateOrConnectWithoutUser1Input | HistoryCreateOrConnectWithoutUser1Input[]
    upsert?: HistoryUpsertWithWhereUniqueWithoutUser1Input | HistoryUpsertWithWhereUniqueWithoutUser1Input[]
    createMany?: HistoryCreateManyUser1InputEnvelope
    set?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    disconnect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    delete?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    update?: HistoryUpdateWithWhereUniqueWithoutUser1Input | HistoryUpdateWithWhereUniqueWithoutUser1Input[]
    updateMany?: HistoryUpdateManyWithWhereWithoutUser1Input | HistoryUpdateManyWithWhereWithoutUser1Input[]
    deleteMany?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
  }

  export type HistoryUpdateManyWithoutUser2NestedInput = {
    create?: XOR<HistoryCreateWithoutUser2Input, HistoryUncheckedCreateWithoutUser2Input> | HistoryCreateWithoutUser2Input[] | HistoryUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: HistoryCreateOrConnectWithoutUser2Input | HistoryCreateOrConnectWithoutUser2Input[]
    upsert?: HistoryUpsertWithWhereUniqueWithoutUser2Input | HistoryUpsertWithWhereUniqueWithoutUser2Input[]
    createMany?: HistoryCreateManyUser2InputEnvelope
    set?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    disconnect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    delete?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    update?: HistoryUpdateWithWhereUniqueWithoutUser2Input | HistoryUpdateWithWhereUniqueWithoutUser2Input[]
    updateMany?: HistoryUpdateManyWithWhereWithoutUser2Input | HistoryUpdateManyWithWhereWithoutUser2Input[]
    deleteMany?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
  }

  export type RoomParticipantUpdateManyWithoutUserNestedInput = {
    create?: XOR<RoomParticipantCreateWithoutUserInput, RoomParticipantUncheckedCreateWithoutUserInput> | RoomParticipantCreateWithoutUserInput[] | RoomParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoomParticipantCreateOrConnectWithoutUserInput | RoomParticipantCreateOrConnectWithoutUserInput[]
    upsert?: RoomParticipantUpsertWithWhereUniqueWithoutUserInput | RoomParticipantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RoomParticipantCreateManyUserInputEnvelope
    set?: RoomParticipantWhereUniqueInput | RoomParticipantWhereUniqueInput[]
    disconnect?: RoomParticipantWhereUniqueInput | RoomParticipantWhereUniqueInput[]
    delete?: RoomParticipantWhereUniqueInput | RoomParticipantWhereUniqueInput[]
    connect?: RoomParticipantWhereUniqueInput | RoomParticipantWhereUniqueInput[]
    update?: RoomParticipantUpdateWithWhereUniqueWithoutUserInput | RoomParticipantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RoomParticipantUpdateManyWithWhereWithoutUserInput | RoomParticipantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RoomParticipantScalarWhereInput | RoomParticipantScalarWhereInput[]
  }

  export type SubscriptionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutUserInput | SubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutUserInput | SubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutUserInput | SubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type AITranscriptUpdateManyWithoutUserNestedInput = {
    create?: XOR<AITranscriptCreateWithoutUserInput, AITranscriptUncheckedCreateWithoutUserInput> | AITranscriptCreateWithoutUserInput[] | AITranscriptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AITranscriptCreateOrConnectWithoutUserInput | AITranscriptCreateOrConnectWithoutUserInput[]
    upsert?: AITranscriptUpsertWithWhereUniqueWithoutUserInput | AITranscriptUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AITranscriptCreateManyUserInputEnvelope
    set?: AITranscriptWhereUniqueInput | AITranscriptWhereUniqueInput[]
    disconnect?: AITranscriptWhereUniqueInput | AITranscriptWhereUniqueInput[]
    delete?: AITranscriptWhereUniqueInput | AITranscriptWhereUniqueInput[]
    connect?: AITranscriptWhereUniqueInput | AITranscriptWhereUniqueInput[]
    update?: AITranscriptUpdateWithWhereUniqueWithoutUserInput | AITranscriptUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AITranscriptUpdateManyWithWhereWithoutUserInput | AITranscriptUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AITranscriptScalarWhereInput | AITranscriptScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type FriendshipUpdateManyWithoutUserNestedInput = {
    create?: XOR<FriendshipCreateWithoutUserInput, FriendshipUncheckedCreateWithoutUserInput> | FriendshipCreateWithoutUserInput[] | FriendshipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutUserInput | FriendshipCreateOrConnectWithoutUserInput[]
    upsert?: FriendshipUpsertWithWhereUniqueWithoutUserInput | FriendshipUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FriendshipCreateManyUserInputEnvelope
    set?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    disconnect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    delete?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    update?: FriendshipUpdateWithWhereUniqueWithoutUserInput | FriendshipUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FriendshipUpdateManyWithWhereWithoutUserInput | FriendshipUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
  }

  export type FriendshipUpdateManyWithoutFriendNestedInput = {
    create?: XOR<FriendshipCreateWithoutFriendInput, FriendshipUncheckedCreateWithoutFriendInput> | FriendshipCreateWithoutFriendInput[] | FriendshipUncheckedCreateWithoutFriendInput[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutFriendInput | FriendshipCreateOrConnectWithoutFriendInput[]
    upsert?: FriendshipUpsertWithWhereUniqueWithoutFriendInput | FriendshipUpsertWithWhereUniqueWithoutFriendInput[]
    createMany?: FriendshipCreateManyFriendInputEnvelope
    set?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    disconnect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    delete?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    update?: FriendshipUpdateWithWhereUniqueWithoutFriendInput | FriendshipUpdateWithWhereUniqueWithoutFriendInput[]
    updateMany?: FriendshipUpdateManyWithWhereWithoutFriendInput | FriendshipUpdateManyWithWhereWithoutFriendInput[]
    deleteMany?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
  }

  export type ReportUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReportCreateWithoutUserInput, ReportUncheckedCreateWithoutUserInput> | ReportCreateWithoutUserInput[] | ReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutUserInput | ReportCreateOrConnectWithoutUserInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutUserInput | ReportUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReportCreateManyUserInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutUserInput | ReportUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutUserInput | ReportUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type ReportUpdateManyWithoutReportedUserNestedInput = {
    create?: XOR<ReportCreateWithoutReportedUserInput, ReportUncheckedCreateWithoutReportedUserInput> | ReportCreateWithoutReportedUserInput[] | ReportUncheckedCreateWithoutReportedUserInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutReportedUserInput | ReportCreateOrConnectWithoutReportedUserInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutReportedUserInput | ReportUpsertWithWhereUniqueWithoutReportedUserInput[]
    createMany?: ReportCreateManyReportedUserInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutReportedUserInput | ReportUpdateWithWhereUniqueWithoutReportedUserInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutReportedUserInput | ReportUpdateManyWithWhereWithoutReportedUserInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type MessageWithFreindsUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageWithFreindsCreateWithoutSenderInput, MessageWithFreindsUncheckedCreateWithoutSenderInput> | MessageWithFreindsCreateWithoutSenderInput[] | MessageWithFreindsUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageWithFreindsCreateOrConnectWithoutSenderInput | MessageWithFreindsCreateOrConnectWithoutSenderInput[]
    upsert?: MessageWithFreindsUpsertWithWhereUniqueWithoutSenderInput | MessageWithFreindsUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageWithFreindsCreateManySenderInputEnvelope
    set?: MessageWithFreindsWhereUniqueInput | MessageWithFreindsWhereUniqueInput[]
    disconnect?: MessageWithFreindsWhereUniqueInput | MessageWithFreindsWhereUniqueInput[]
    delete?: MessageWithFreindsWhereUniqueInput | MessageWithFreindsWhereUniqueInput[]
    connect?: MessageWithFreindsWhereUniqueInput | MessageWithFreindsWhereUniqueInput[]
    update?: MessageWithFreindsUpdateWithWhereUniqueWithoutSenderInput | MessageWithFreindsUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageWithFreindsUpdateManyWithWhereWithoutSenderInput | MessageWithFreindsUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageWithFreindsScalarWhereInput | MessageWithFreindsScalarWhereInput[]
  }

  export type MessageWithFreindsUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<MessageWithFreindsCreateWithoutReceiverInput, MessageWithFreindsUncheckedCreateWithoutReceiverInput> | MessageWithFreindsCreateWithoutReceiverInput[] | MessageWithFreindsUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageWithFreindsCreateOrConnectWithoutReceiverInput | MessageWithFreindsCreateOrConnectWithoutReceiverInput[]
    upsert?: MessageWithFreindsUpsertWithWhereUniqueWithoutReceiverInput | MessageWithFreindsUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: MessageWithFreindsCreateManyReceiverInputEnvelope
    set?: MessageWithFreindsWhereUniqueInput | MessageWithFreindsWhereUniqueInput[]
    disconnect?: MessageWithFreindsWhereUniqueInput | MessageWithFreindsWhereUniqueInput[]
    delete?: MessageWithFreindsWhereUniqueInput | MessageWithFreindsWhereUniqueInput[]
    connect?: MessageWithFreindsWhereUniqueInput | MessageWithFreindsWhereUniqueInput[]
    update?: MessageWithFreindsUpdateWithWhereUniqueWithoutReceiverInput | MessageWithFreindsUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: MessageWithFreindsUpdateManyWithWhereWithoutReceiverInput | MessageWithFreindsUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: MessageWithFreindsScalarWhereInput | MessageWithFreindsScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutUser1NestedInput = {
    create?: XOR<MatchCreateWithoutUser1Input, MatchUncheckedCreateWithoutUser1Input> | MatchCreateWithoutUser1Input[] | MatchUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: MatchCreateOrConnectWithoutUser1Input | MatchCreateOrConnectWithoutUser1Input[]
    upsert?: MatchUpsertWithWhereUniqueWithoutUser1Input | MatchUpsertWithWhereUniqueWithoutUser1Input[]
    createMany?: MatchCreateManyUser1InputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutUser1Input | MatchUpdateWithWhereUniqueWithoutUser1Input[]
    updateMany?: MatchUpdateManyWithWhereWithoutUser1Input | MatchUpdateManyWithWhereWithoutUser1Input[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutUser2NestedInput = {
    create?: XOR<MatchCreateWithoutUser2Input, MatchUncheckedCreateWithoutUser2Input> | MatchCreateWithoutUser2Input[] | MatchUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: MatchCreateOrConnectWithoutUser2Input | MatchCreateOrConnectWithoutUser2Input[]
    upsert?: MatchUpsertWithWhereUniqueWithoutUser2Input | MatchUpsertWithWhereUniqueWithoutUser2Input[]
    createMany?: MatchCreateManyUser2InputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutUser2Input | MatchUpdateWithWhereUniqueWithoutUser2Input[]
    updateMany?: MatchUpdateManyWithWhereWithoutUser2Input | MatchUpdateManyWithWhereWithoutUser2Input[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type HistoryUncheckedUpdateManyWithoutUser1NestedInput = {
    create?: XOR<HistoryCreateWithoutUser1Input, HistoryUncheckedCreateWithoutUser1Input> | HistoryCreateWithoutUser1Input[] | HistoryUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: HistoryCreateOrConnectWithoutUser1Input | HistoryCreateOrConnectWithoutUser1Input[]
    upsert?: HistoryUpsertWithWhereUniqueWithoutUser1Input | HistoryUpsertWithWhereUniqueWithoutUser1Input[]
    createMany?: HistoryCreateManyUser1InputEnvelope
    set?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    disconnect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    delete?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    update?: HistoryUpdateWithWhereUniqueWithoutUser1Input | HistoryUpdateWithWhereUniqueWithoutUser1Input[]
    updateMany?: HistoryUpdateManyWithWhereWithoutUser1Input | HistoryUpdateManyWithWhereWithoutUser1Input[]
    deleteMany?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
  }

  export type HistoryUncheckedUpdateManyWithoutUser2NestedInput = {
    create?: XOR<HistoryCreateWithoutUser2Input, HistoryUncheckedCreateWithoutUser2Input> | HistoryCreateWithoutUser2Input[] | HistoryUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: HistoryCreateOrConnectWithoutUser2Input | HistoryCreateOrConnectWithoutUser2Input[]
    upsert?: HistoryUpsertWithWhereUniqueWithoutUser2Input | HistoryUpsertWithWhereUniqueWithoutUser2Input[]
    createMany?: HistoryCreateManyUser2InputEnvelope
    set?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    disconnect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    delete?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    update?: HistoryUpdateWithWhereUniqueWithoutUser2Input | HistoryUpdateWithWhereUniqueWithoutUser2Input[]
    updateMany?: HistoryUpdateManyWithWhereWithoutUser2Input | HistoryUpdateManyWithWhereWithoutUser2Input[]
    deleteMany?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
  }

  export type RoomParticipantUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RoomParticipantCreateWithoutUserInput, RoomParticipantUncheckedCreateWithoutUserInput> | RoomParticipantCreateWithoutUserInput[] | RoomParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoomParticipantCreateOrConnectWithoutUserInput | RoomParticipantCreateOrConnectWithoutUserInput[]
    upsert?: RoomParticipantUpsertWithWhereUniqueWithoutUserInput | RoomParticipantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RoomParticipantCreateManyUserInputEnvelope
    set?: RoomParticipantWhereUniqueInput | RoomParticipantWhereUniqueInput[]
    disconnect?: RoomParticipantWhereUniqueInput | RoomParticipantWhereUniqueInput[]
    delete?: RoomParticipantWhereUniqueInput | RoomParticipantWhereUniqueInput[]
    connect?: RoomParticipantWhereUniqueInput | RoomParticipantWhereUniqueInput[]
    update?: RoomParticipantUpdateWithWhereUniqueWithoutUserInput | RoomParticipantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RoomParticipantUpdateManyWithWhereWithoutUserInput | RoomParticipantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RoomParticipantScalarWhereInput | RoomParticipantScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutUserInput | SubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutUserInput | SubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutUserInput | SubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type AITranscriptUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AITranscriptCreateWithoutUserInput, AITranscriptUncheckedCreateWithoutUserInput> | AITranscriptCreateWithoutUserInput[] | AITranscriptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AITranscriptCreateOrConnectWithoutUserInput | AITranscriptCreateOrConnectWithoutUserInput[]
    upsert?: AITranscriptUpsertWithWhereUniqueWithoutUserInput | AITranscriptUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AITranscriptCreateManyUserInputEnvelope
    set?: AITranscriptWhereUniqueInput | AITranscriptWhereUniqueInput[]
    disconnect?: AITranscriptWhereUniqueInput | AITranscriptWhereUniqueInput[]
    delete?: AITranscriptWhereUniqueInput | AITranscriptWhereUniqueInput[]
    connect?: AITranscriptWhereUniqueInput | AITranscriptWhereUniqueInput[]
    update?: AITranscriptUpdateWithWhereUniqueWithoutUserInput | AITranscriptUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AITranscriptUpdateManyWithWhereWithoutUserInput | AITranscriptUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AITranscriptScalarWhereInput | AITranscriptScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type FriendshipUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FriendshipCreateWithoutUserInput, FriendshipUncheckedCreateWithoutUserInput> | FriendshipCreateWithoutUserInput[] | FriendshipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutUserInput | FriendshipCreateOrConnectWithoutUserInput[]
    upsert?: FriendshipUpsertWithWhereUniqueWithoutUserInput | FriendshipUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FriendshipCreateManyUserInputEnvelope
    set?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    disconnect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    delete?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    update?: FriendshipUpdateWithWhereUniqueWithoutUserInput | FriendshipUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FriendshipUpdateManyWithWhereWithoutUserInput | FriendshipUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
  }

  export type FriendshipUncheckedUpdateManyWithoutFriendNestedInput = {
    create?: XOR<FriendshipCreateWithoutFriendInput, FriendshipUncheckedCreateWithoutFriendInput> | FriendshipCreateWithoutFriendInput[] | FriendshipUncheckedCreateWithoutFriendInput[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutFriendInput | FriendshipCreateOrConnectWithoutFriendInput[]
    upsert?: FriendshipUpsertWithWhereUniqueWithoutFriendInput | FriendshipUpsertWithWhereUniqueWithoutFriendInput[]
    createMany?: FriendshipCreateManyFriendInputEnvelope
    set?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    disconnect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    delete?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    update?: FriendshipUpdateWithWhereUniqueWithoutFriendInput | FriendshipUpdateWithWhereUniqueWithoutFriendInput[]
    updateMany?: FriendshipUpdateManyWithWhereWithoutFriendInput | FriendshipUpdateManyWithWhereWithoutFriendInput[]
    deleteMany?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
  }

  export type ReportUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReportCreateWithoutUserInput, ReportUncheckedCreateWithoutUserInput> | ReportCreateWithoutUserInput[] | ReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutUserInput | ReportCreateOrConnectWithoutUserInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutUserInput | ReportUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReportCreateManyUserInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutUserInput | ReportUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutUserInput | ReportUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type ReportUncheckedUpdateManyWithoutReportedUserNestedInput = {
    create?: XOR<ReportCreateWithoutReportedUserInput, ReportUncheckedCreateWithoutReportedUserInput> | ReportCreateWithoutReportedUserInput[] | ReportUncheckedCreateWithoutReportedUserInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutReportedUserInput | ReportCreateOrConnectWithoutReportedUserInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutReportedUserInput | ReportUpsertWithWhereUniqueWithoutReportedUserInput[]
    createMany?: ReportCreateManyReportedUserInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutReportedUserInput | ReportUpdateWithWhereUniqueWithoutReportedUserInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutReportedUserInput | ReportUpdateManyWithWhereWithoutReportedUserInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type MessageWithFreindsUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageWithFreindsCreateWithoutSenderInput, MessageWithFreindsUncheckedCreateWithoutSenderInput> | MessageWithFreindsCreateWithoutSenderInput[] | MessageWithFreindsUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageWithFreindsCreateOrConnectWithoutSenderInput | MessageWithFreindsCreateOrConnectWithoutSenderInput[]
    upsert?: MessageWithFreindsUpsertWithWhereUniqueWithoutSenderInput | MessageWithFreindsUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageWithFreindsCreateManySenderInputEnvelope
    set?: MessageWithFreindsWhereUniqueInput | MessageWithFreindsWhereUniqueInput[]
    disconnect?: MessageWithFreindsWhereUniqueInput | MessageWithFreindsWhereUniqueInput[]
    delete?: MessageWithFreindsWhereUniqueInput | MessageWithFreindsWhereUniqueInput[]
    connect?: MessageWithFreindsWhereUniqueInput | MessageWithFreindsWhereUniqueInput[]
    update?: MessageWithFreindsUpdateWithWhereUniqueWithoutSenderInput | MessageWithFreindsUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageWithFreindsUpdateManyWithWhereWithoutSenderInput | MessageWithFreindsUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageWithFreindsScalarWhereInput | MessageWithFreindsScalarWhereInput[]
  }

  export type MessageWithFreindsUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<MessageWithFreindsCreateWithoutReceiverInput, MessageWithFreindsUncheckedCreateWithoutReceiverInput> | MessageWithFreindsCreateWithoutReceiverInput[] | MessageWithFreindsUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageWithFreindsCreateOrConnectWithoutReceiverInput | MessageWithFreindsCreateOrConnectWithoutReceiverInput[]
    upsert?: MessageWithFreindsUpsertWithWhereUniqueWithoutReceiverInput | MessageWithFreindsUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: MessageWithFreindsCreateManyReceiverInputEnvelope
    set?: MessageWithFreindsWhereUniqueInput | MessageWithFreindsWhereUniqueInput[]
    disconnect?: MessageWithFreindsWhereUniqueInput | MessageWithFreindsWhereUniqueInput[]
    delete?: MessageWithFreindsWhereUniqueInput | MessageWithFreindsWhereUniqueInput[]
    connect?: MessageWithFreindsWhereUniqueInput | MessageWithFreindsWhereUniqueInput[]
    update?: MessageWithFreindsUpdateWithWhereUniqueWithoutReceiverInput | MessageWithFreindsUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: MessageWithFreindsUpdateManyWithWhereWithoutReceiverInput | MessageWithFreindsUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: MessageWithFreindsScalarWhereInput | MessageWithFreindsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMatchesAsUser1Input = {
    create?: XOR<UserCreateWithoutMatchesAsUser1Input, UserUncheckedCreateWithoutMatchesAsUser1Input>
    connectOrCreate?: UserCreateOrConnectWithoutMatchesAsUser1Input
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMatchesAsUser2Input = {
    create?: XOR<UserCreateWithoutMatchesAsUser2Input, UserUncheckedCreateWithoutMatchesAsUser2Input>
    connectOrCreate?: UserCreateOrConnectWithoutMatchesAsUser2Input
    connect?: UserWhereUniqueInput
  }

  export type RoomCreateNestedOneWithoutMatchesInput = {
    create?: XOR<RoomCreateWithoutMatchesInput, RoomUncheckedCreateWithoutMatchesInput>
    connectOrCreate?: RoomCreateOrConnectWithoutMatchesInput
    connect?: RoomWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutMatchesAsUser1NestedInput = {
    create?: XOR<UserCreateWithoutMatchesAsUser1Input, UserUncheckedCreateWithoutMatchesAsUser1Input>
    connectOrCreate?: UserCreateOrConnectWithoutMatchesAsUser1Input
    upsert?: UserUpsertWithoutMatchesAsUser1Input
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMatchesAsUser1Input, UserUpdateWithoutMatchesAsUser1Input>, UserUncheckedUpdateWithoutMatchesAsUser1Input>
  }

  export type UserUpdateOneRequiredWithoutMatchesAsUser2NestedInput = {
    create?: XOR<UserCreateWithoutMatchesAsUser2Input, UserUncheckedCreateWithoutMatchesAsUser2Input>
    connectOrCreate?: UserCreateOrConnectWithoutMatchesAsUser2Input
    upsert?: UserUpsertWithoutMatchesAsUser2Input
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMatchesAsUser2Input, UserUpdateWithoutMatchesAsUser2Input>, UserUncheckedUpdateWithoutMatchesAsUser2Input>
  }

  export type RoomUpdateOneWithoutMatchesNestedInput = {
    create?: XOR<RoomCreateWithoutMatchesInput, RoomUncheckedCreateWithoutMatchesInput>
    connectOrCreate?: RoomCreateOrConnectWithoutMatchesInput
    upsert?: RoomUpsertWithoutMatchesInput
    disconnect?: RoomWhereInput | boolean
    delete?: RoomWhereInput | boolean
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutMatchesInput, RoomUpdateWithoutMatchesInput>, RoomUncheckedUpdateWithoutMatchesInput>
  }

  export type RoomParticipantCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomParticipantCreateWithoutRoomInput, RoomParticipantUncheckedCreateWithoutRoomInput> | RoomParticipantCreateWithoutRoomInput[] | RoomParticipantUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomParticipantCreateOrConnectWithoutRoomInput | RoomParticipantCreateOrConnectWithoutRoomInput[]
    createMany?: RoomParticipantCreateManyRoomInputEnvelope
    connect?: RoomParticipantWhereUniqueInput | RoomParticipantWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutRoomInput = {
    create?: XOR<MessageCreateWithoutRoomInput, MessageUncheckedCreateWithoutRoomInput> | MessageCreateWithoutRoomInput[] | MessageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutRoomInput | MessageCreateOrConnectWithoutRoomInput[]
    createMany?: MessageCreateManyRoomInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type AITranscriptCreateNestedManyWithoutRoomInput = {
    create?: XOR<AITranscriptCreateWithoutRoomInput, AITranscriptUncheckedCreateWithoutRoomInput> | AITranscriptCreateWithoutRoomInput[] | AITranscriptUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: AITranscriptCreateOrConnectWithoutRoomInput | AITranscriptCreateOrConnectWithoutRoomInput[]
    createMany?: AITranscriptCreateManyRoomInputEnvelope
    connect?: AITranscriptWhereUniqueInput | AITranscriptWhereUniqueInput[]
  }

  export type MatchCreateNestedManyWithoutRoomInput = {
    create?: XOR<MatchCreateWithoutRoomInput, MatchUncheckedCreateWithoutRoomInput> | MatchCreateWithoutRoomInput[] | MatchUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutRoomInput | MatchCreateOrConnectWithoutRoomInput[]
    createMany?: MatchCreateManyRoomInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type RoomParticipantUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomParticipantCreateWithoutRoomInput, RoomParticipantUncheckedCreateWithoutRoomInput> | RoomParticipantCreateWithoutRoomInput[] | RoomParticipantUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomParticipantCreateOrConnectWithoutRoomInput | RoomParticipantCreateOrConnectWithoutRoomInput[]
    createMany?: RoomParticipantCreateManyRoomInputEnvelope
    connect?: RoomParticipantWhereUniqueInput | RoomParticipantWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<MessageCreateWithoutRoomInput, MessageUncheckedCreateWithoutRoomInput> | MessageCreateWithoutRoomInput[] | MessageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutRoomInput | MessageCreateOrConnectWithoutRoomInput[]
    createMany?: MessageCreateManyRoomInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type AITranscriptUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<AITranscriptCreateWithoutRoomInput, AITranscriptUncheckedCreateWithoutRoomInput> | AITranscriptCreateWithoutRoomInput[] | AITranscriptUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: AITranscriptCreateOrConnectWithoutRoomInput | AITranscriptCreateOrConnectWithoutRoomInput[]
    createMany?: AITranscriptCreateManyRoomInputEnvelope
    connect?: AITranscriptWhereUniqueInput | AITranscriptWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<MatchCreateWithoutRoomInput, MatchUncheckedCreateWithoutRoomInput> | MatchCreateWithoutRoomInput[] | MatchUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutRoomInput | MatchCreateOrConnectWithoutRoomInput[]
    createMany?: MatchCreateManyRoomInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type RoomParticipantUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomParticipantCreateWithoutRoomInput, RoomParticipantUncheckedCreateWithoutRoomInput> | RoomParticipantCreateWithoutRoomInput[] | RoomParticipantUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomParticipantCreateOrConnectWithoutRoomInput | RoomParticipantCreateOrConnectWithoutRoomInput[]
    upsert?: RoomParticipantUpsertWithWhereUniqueWithoutRoomInput | RoomParticipantUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomParticipantCreateManyRoomInputEnvelope
    set?: RoomParticipantWhereUniqueInput | RoomParticipantWhereUniqueInput[]
    disconnect?: RoomParticipantWhereUniqueInput | RoomParticipantWhereUniqueInput[]
    delete?: RoomParticipantWhereUniqueInput | RoomParticipantWhereUniqueInput[]
    connect?: RoomParticipantWhereUniqueInput | RoomParticipantWhereUniqueInput[]
    update?: RoomParticipantUpdateWithWhereUniqueWithoutRoomInput | RoomParticipantUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomParticipantUpdateManyWithWhereWithoutRoomInput | RoomParticipantUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomParticipantScalarWhereInput | RoomParticipantScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutRoomNestedInput = {
    create?: XOR<MessageCreateWithoutRoomInput, MessageUncheckedCreateWithoutRoomInput> | MessageCreateWithoutRoomInput[] | MessageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutRoomInput | MessageCreateOrConnectWithoutRoomInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutRoomInput | MessageUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: MessageCreateManyRoomInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutRoomInput | MessageUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutRoomInput | MessageUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type AITranscriptUpdateManyWithoutRoomNestedInput = {
    create?: XOR<AITranscriptCreateWithoutRoomInput, AITranscriptUncheckedCreateWithoutRoomInput> | AITranscriptCreateWithoutRoomInput[] | AITranscriptUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: AITranscriptCreateOrConnectWithoutRoomInput | AITranscriptCreateOrConnectWithoutRoomInput[]
    upsert?: AITranscriptUpsertWithWhereUniqueWithoutRoomInput | AITranscriptUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: AITranscriptCreateManyRoomInputEnvelope
    set?: AITranscriptWhereUniqueInput | AITranscriptWhereUniqueInput[]
    disconnect?: AITranscriptWhereUniqueInput | AITranscriptWhereUniqueInput[]
    delete?: AITranscriptWhereUniqueInput | AITranscriptWhereUniqueInput[]
    connect?: AITranscriptWhereUniqueInput | AITranscriptWhereUniqueInput[]
    update?: AITranscriptUpdateWithWhereUniqueWithoutRoomInput | AITranscriptUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: AITranscriptUpdateManyWithWhereWithoutRoomInput | AITranscriptUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: AITranscriptScalarWhereInput | AITranscriptScalarWhereInput[]
  }

  export type MatchUpdateManyWithoutRoomNestedInput = {
    create?: XOR<MatchCreateWithoutRoomInput, MatchUncheckedCreateWithoutRoomInput> | MatchCreateWithoutRoomInput[] | MatchUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutRoomInput | MatchCreateOrConnectWithoutRoomInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutRoomInput | MatchUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: MatchCreateManyRoomInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutRoomInput | MatchUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutRoomInput | MatchUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type RoomParticipantUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomParticipantCreateWithoutRoomInput, RoomParticipantUncheckedCreateWithoutRoomInput> | RoomParticipantCreateWithoutRoomInput[] | RoomParticipantUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomParticipantCreateOrConnectWithoutRoomInput | RoomParticipantCreateOrConnectWithoutRoomInput[]
    upsert?: RoomParticipantUpsertWithWhereUniqueWithoutRoomInput | RoomParticipantUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomParticipantCreateManyRoomInputEnvelope
    set?: RoomParticipantWhereUniqueInput | RoomParticipantWhereUniqueInput[]
    disconnect?: RoomParticipantWhereUniqueInput | RoomParticipantWhereUniqueInput[]
    delete?: RoomParticipantWhereUniqueInput | RoomParticipantWhereUniqueInput[]
    connect?: RoomParticipantWhereUniqueInput | RoomParticipantWhereUniqueInput[]
    update?: RoomParticipantUpdateWithWhereUniqueWithoutRoomInput | RoomParticipantUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomParticipantUpdateManyWithWhereWithoutRoomInput | RoomParticipantUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomParticipantScalarWhereInput | RoomParticipantScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<MessageCreateWithoutRoomInput, MessageUncheckedCreateWithoutRoomInput> | MessageCreateWithoutRoomInput[] | MessageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutRoomInput | MessageCreateOrConnectWithoutRoomInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutRoomInput | MessageUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: MessageCreateManyRoomInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutRoomInput | MessageUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutRoomInput | MessageUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type AITranscriptUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<AITranscriptCreateWithoutRoomInput, AITranscriptUncheckedCreateWithoutRoomInput> | AITranscriptCreateWithoutRoomInput[] | AITranscriptUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: AITranscriptCreateOrConnectWithoutRoomInput | AITranscriptCreateOrConnectWithoutRoomInput[]
    upsert?: AITranscriptUpsertWithWhereUniqueWithoutRoomInput | AITranscriptUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: AITranscriptCreateManyRoomInputEnvelope
    set?: AITranscriptWhereUniqueInput | AITranscriptWhereUniqueInput[]
    disconnect?: AITranscriptWhereUniqueInput | AITranscriptWhereUniqueInput[]
    delete?: AITranscriptWhereUniqueInput | AITranscriptWhereUniqueInput[]
    connect?: AITranscriptWhereUniqueInput | AITranscriptWhereUniqueInput[]
    update?: AITranscriptUpdateWithWhereUniqueWithoutRoomInput | AITranscriptUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: AITranscriptUpdateManyWithWhereWithoutRoomInput | AITranscriptUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: AITranscriptScalarWhereInput | AITranscriptScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<MatchCreateWithoutRoomInput, MatchUncheckedCreateWithoutRoomInput> | MatchCreateWithoutRoomInput[] | MatchUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutRoomInput | MatchCreateOrConnectWithoutRoomInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutRoomInput | MatchUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: MatchCreateManyRoomInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutRoomInput | MatchUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutRoomInput | MatchUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRoomsJoinedInput = {
    create?: XOR<UserCreateWithoutRoomsJoinedInput, UserUncheckedCreateWithoutRoomsJoinedInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoomsJoinedInput
    connect?: UserWhereUniqueInput
  }

  export type RoomCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<RoomCreateWithoutParticipantsInput, RoomUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutParticipantsInput
    connect?: RoomWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRoomsJoinedNestedInput = {
    create?: XOR<UserCreateWithoutRoomsJoinedInput, UserUncheckedCreateWithoutRoomsJoinedInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoomsJoinedInput
    upsert?: UserUpsertWithoutRoomsJoinedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRoomsJoinedInput, UserUpdateWithoutRoomsJoinedInput>, UserUncheckedUpdateWithoutRoomsJoinedInput>
  }

  export type RoomUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: XOR<RoomCreateWithoutParticipantsInput, RoomUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutParticipantsInput
    upsert?: RoomUpsertWithoutParticipantsInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutParticipantsInput, RoomUpdateWithoutParticipantsInput>, RoomUncheckedUpdateWithoutParticipantsInput>
  }

  export type UserCreateNestedOneWithoutMessagesInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type RoomCreateNestedOneWithoutMessagesInput = {
    create?: XOR<RoomCreateWithoutMessagesInput, RoomUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: RoomCreateOrConnectWithoutMessagesInput
    connect?: RoomWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    upsert?: UserUpsertWithoutMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessagesInput, UserUpdateWithoutMessagesInput>, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type RoomUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<RoomCreateWithoutMessagesInput, RoomUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: RoomCreateOrConnectWithoutMessagesInput
    upsert?: RoomUpsertWithoutMessagesInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutMessagesInput, RoomUpdateWithoutMessagesInput>, RoomUncheckedUpdateWithoutMessagesInput>
  }

  export type UserCreateNestedOneWithoutMessagesenderpersonInput = {
    create?: XOR<UserCreateWithoutMessagesenderpersonInput, UserUncheckedCreateWithoutMessagesenderpersonInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesenderpersonInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMessagereceiverpersonInput = {
    create?: XOR<UserCreateWithoutMessagereceiverpersonInput, UserUncheckedCreateWithoutMessagereceiverpersonInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagereceiverpersonInput
    connect?: UserWhereUniqueInput
  }

  export type EnumMessageTypeFieldUpdateOperationsInput = {
    set?: $Enums.MessageType
  }

  export type UserUpdateOneRequiredWithoutMessagesenderpersonNestedInput = {
    create?: XOR<UserCreateWithoutMessagesenderpersonInput, UserUncheckedCreateWithoutMessagesenderpersonInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesenderpersonInput
    upsert?: UserUpsertWithoutMessagesenderpersonInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessagesenderpersonInput, UserUpdateWithoutMessagesenderpersonInput>, UserUncheckedUpdateWithoutMessagesenderpersonInput>
  }

  export type UserUpdateOneRequiredWithoutMessagereceiverpersonNestedInput = {
    create?: XOR<UserCreateWithoutMessagereceiverpersonInput, UserUncheckedCreateWithoutMessagereceiverpersonInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagereceiverpersonInput
    upsert?: UserUpsertWithoutMessagereceiverpersonInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessagereceiverpersonInput, UserUpdateWithoutMessagereceiverpersonInput>, UserUncheckedUpdateWithoutMessagereceiverpersonInput>
  }

  export type RoomCreateNestedOneWithoutAiEventsInput = {
    create?: XOR<RoomCreateWithoutAiEventsInput, RoomUncheckedCreateWithoutAiEventsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutAiEventsInput
    connect?: RoomWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAitranscriptsInput = {
    create?: XOR<UserCreateWithoutAitranscriptsInput, UserUncheckedCreateWithoutAitranscriptsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAitranscriptsInput
    connect?: UserWhereUniqueInput
  }

  export type RoomUpdateOneRequiredWithoutAiEventsNestedInput = {
    create?: XOR<RoomCreateWithoutAiEventsInput, RoomUncheckedCreateWithoutAiEventsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutAiEventsInput
    upsert?: RoomUpsertWithoutAiEventsInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutAiEventsInput, RoomUpdateWithoutAiEventsInput>, RoomUncheckedUpdateWithoutAiEventsInput>
  }

  export type UserUpdateOneRequiredWithoutAitranscriptsNestedInput = {
    create?: XOR<UserCreateWithoutAitranscriptsInput, UserUncheckedCreateWithoutAitranscriptsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAitranscriptsInput
    upsert?: UserUpsertWithoutAitranscriptsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAitranscriptsInput, UserUpdateWithoutAitranscriptsInput>, UserUncheckedUpdateWithoutAitranscriptsInput>
  }

  export type UserCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSubscriptionsNestedInput = {
    create?: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionsInput
    upsert?: UserUpsertWithoutSubscriptionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubscriptionsInput, UserUpdateWithoutSubscriptionsInput>, UserUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type UserCreateNestedOneWithoutSentFriendsInput = {
    create?: XOR<UserCreateWithoutSentFriendsInput, UserUncheckedCreateWithoutSentFriendsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentFriendsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedFriendsInput = {
    create?: XOR<UserCreateWithoutReceivedFriendsInput, UserUncheckedCreateWithoutReceivedFriendsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedFriendsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSentFriendsNestedInput = {
    create?: XOR<UserCreateWithoutSentFriendsInput, UserUncheckedCreateWithoutSentFriendsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentFriendsInput
    upsert?: UserUpsertWithoutSentFriendsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentFriendsInput, UserUpdateWithoutSentFriendsInput>, UserUncheckedUpdateWithoutSentFriendsInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedFriendsNestedInput = {
    create?: XOR<UserCreateWithoutReceivedFriendsInput, UserUncheckedCreateWithoutReceivedFriendsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedFriendsInput
    upsert?: UserUpsertWithoutReceivedFriendsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedFriendsInput, UserUpdateWithoutReceivedFriendsInput>, UserUncheckedUpdateWithoutReceivedFriendsInput>
  }

  export type UserCreateNestedOneWithoutUserReportedInput = {
    create?: XOR<UserCreateWithoutUserReportedInput, UserUncheckedCreateWithoutUserReportedInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserReportedInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReportedUserInput = {
    create?: XOR<UserCreateWithoutReportedUserInput, UserUncheckedCreateWithoutReportedUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutReportedUserInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserReportedNestedInput = {
    create?: XOR<UserCreateWithoutUserReportedInput, UserUncheckedCreateWithoutUserReportedInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserReportedInput
    upsert?: UserUpsertWithoutUserReportedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserReportedInput, UserUpdateWithoutUserReportedInput>, UserUncheckedUpdateWithoutUserReportedInput>
  }

  export type UserUpdateOneRequiredWithoutReportedUserNestedInput = {
    create?: XOR<UserCreateWithoutReportedUserInput, UserUncheckedCreateWithoutReportedUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutReportedUserInput
    upsert?: UserUpsertWithoutReportedUserInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReportedUserInput, UserUpdateWithoutReportedUserInput>, UserUncheckedUpdateWithoutReportedUserInput>
  }

  export type UserCreateNestedOneWithoutHistoryAsUser1Input = {
    create?: XOR<UserCreateWithoutHistoryAsUser1Input, UserUncheckedCreateWithoutHistoryAsUser1Input>
    connectOrCreate?: UserCreateOrConnectWithoutHistoryAsUser1Input
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutHistoryAsUser2Input = {
    create?: XOR<UserCreateWithoutHistoryAsUser2Input, UserUncheckedCreateWithoutHistoryAsUser2Input>
    connectOrCreate?: UserCreateOrConnectWithoutHistoryAsUser2Input
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutHistoryAsUser1NestedInput = {
    create?: XOR<UserCreateWithoutHistoryAsUser1Input, UserUncheckedCreateWithoutHistoryAsUser1Input>
    connectOrCreate?: UserCreateOrConnectWithoutHistoryAsUser1Input
    upsert?: UserUpsertWithoutHistoryAsUser1Input
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHistoryAsUser1Input, UserUpdateWithoutHistoryAsUser1Input>, UserUncheckedUpdateWithoutHistoryAsUser1Input>
  }

  export type UserUpdateOneRequiredWithoutHistoryAsUser2NestedInput = {
    create?: XOR<UserCreateWithoutHistoryAsUser2Input, UserUncheckedCreateWithoutHistoryAsUser2Input>
    connectOrCreate?: UserCreateOrConnectWithoutHistoryAsUser2Input
    upsert?: UserUpsertWithoutHistoryAsUser2Input
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHistoryAsUser2Input, UserUpdateWithoutHistoryAsUser2Input>, UserUncheckedUpdateWithoutHistoryAsUser2Input>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumMessageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypeFilter<$PrismaModel> | $Enums.MessageType
  }

  export type NestedEnumMessageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypeWithAggregatesFilter<$PrismaModel> | $Enums.MessageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageTypeFilter<$PrismaModel>
    _max?: NestedEnumMessageTypeFilter<$PrismaModel>
  }

  export type MatchCreateWithoutUser1Input = {
    id?: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    user2: UserCreateNestedOneWithoutMatchesAsUser2Input
    room?: RoomCreateNestedOneWithoutMatchesInput
  }

  export type MatchUncheckedCreateWithoutUser1Input = {
    id?: string
    user2Id: string
    roomId?: string | null
    startedAt?: Date | string
    endedAt?: Date | string | null
  }

  export type MatchCreateOrConnectWithoutUser1Input = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutUser1Input, MatchUncheckedCreateWithoutUser1Input>
  }

  export type MatchCreateManyUser1InputEnvelope = {
    data: MatchCreateManyUser1Input | MatchCreateManyUser1Input[]
    skipDuplicates?: boolean
  }

  export type MatchCreateWithoutUser2Input = {
    id?: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    user1: UserCreateNestedOneWithoutMatchesAsUser1Input
    room?: RoomCreateNestedOneWithoutMatchesInput
  }

  export type MatchUncheckedCreateWithoutUser2Input = {
    id?: string
    user1Id: string
    roomId?: string | null
    startedAt?: Date | string
    endedAt?: Date | string | null
  }

  export type MatchCreateOrConnectWithoutUser2Input = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutUser2Input, MatchUncheckedCreateWithoutUser2Input>
  }

  export type MatchCreateManyUser2InputEnvelope = {
    data: MatchCreateManyUser2Input | MatchCreateManyUser2Input[]
    skipDuplicates?: boolean
  }

  export type HistoryCreateWithoutUser1Input = {
    id?: string
    roomId?: string | null
    startedAt?: Date | string
    endedAt?: Date | string | null
    user2: UserCreateNestedOneWithoutHistoryAsUser2Input
  }

  export type HistoryUncheckedCreateWithoutUser1Input = {
    id?: string
    user2Id: string
    roomId?: string | null
    startedAt?: Date | string
    endedAt?: Date | string | null
  }

  export type HistoryCreateOrConnectWithoutUser1Input = {
    where: HistoryWhereUniqueInput
    create: XOR<HistoryCreateWithoutUser1Input, HistoryUncheckedCreateWithoutUser1Input>
  }

  export type HistoryCreateManyUser1InputEnvelope = {
    data: HistoryCreateManyUser1Input | HistoryCreateManyUser1Input[]
    skipDuplicates?: boolean
  }

  export type HistoryCreateWithoutUser2Input = {
    id?: string
    roomId?: string | null
    startedAt?: Date | string
    endedAt?: Date | string | null
    user1: UserCreateNestedOneWithoutHistoryAsUser1Input
  }

  export type HistoryUncheckedCreateWithoutUser2Input = {
    id?: string
    user1Id: string
    roomId?: string | null
    startedAt?: Date | string
    endedAt?: Date | string | null
  }

  export type HistoryCreateOrConnectWithoutUser2Input = {
    where: HistoryWhereUniqueInput
    create: XOR<HistoryCreateWithoutUser2Input, HistoryUncheckedCreateWithoutUser2Input>
  }

  export type HistoryCreateManyUser2InputEnvelope = {
    data: HistoryCreateManyUser2Input | HistoryCreateManyUser2Input[]
    skipDuplicates?: boolean
  }

  export type RoomParticipantCreateWithoutUserInput = {
    id?: string
    joinedAt?: Date | string
    leftAt?: Date | string | null
    room: RoomCreateNestedOneWithoutParticipantsInput
  }

  export type RoomParticipantUncheckedCreateWithoutUserInput = {
    id?: string
    roomId: string
    joinedAt?: Date | string
    leftAt?: Date | string | null
  }

  export type RoomParticipantCreateOrConnectWithoutUserInput = {
    where: RoomParticipantWhereUniqueInput
    create: XOR<RoomParticipantCreateWithoutUserInput, RoomParticipantUncheckedCreateWithoutUserInput>
  }

  export type RoomParticipantCreateManyUserInputEnvelope = {
    data: RoomParticipantCreateManyUserInput | RoomParticipantCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionCreateWithoutUserInput = {
    id?: string
    plan: string
    startDate?: Date | string
    endDate: Date | string
    razorpayId?: string | null
    paymentStatus?: string
  }

  export type SubscriptionUncheckedCreateWithoutUserInput = {
    id?: string
    plan: string
    startDate?: Date | string
    endDate: Date | string
    razorpayId?: string | null
    paymentStatus?: string
  }

  export type SubscriptionCreateOrConnectWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
  }

  export type SubscriptionCreateManyUserInputEnvelope = {
    data: SubscriptionCreateManyUserInput | SubscriptionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AITranscriptCreateWithoutUserInput = {
    id?: string
    text: string
    lang: string
    isTranslated?: boolean
    translatedText?: string | null
    createdAt?: Date | string
    room: RoomCreateNestedOneWithoutAiEventsInput
  }

  export type AITranscriptUncheckedCreateWithoutUserInput = {
    id?: string
    roomId: string
    text: string
    lang: string
    isTranslated?: boolean
    translatedText?: string | null
    createdAt?: Date | string
  }

  export type AITranscriptCreateOrConnectWithoutUserInput = {
    where: AITranscriptWhereUniqueInput
    create: XOR<AITranscriptCreateWithoutUserInput, AITranscriptUncheckedCreateWithoutUserInput>
  }

  export type AITranscriptCreateManyUserInputEnvelope = {
    data: AITranscriptCreateManyUserInput | AITranscriptCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutSenderInput = {
    id?: string
    content: string
    createdAt?: Date | string
    room: RoomCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutSenderInput = {
    id?: string
    content: string
    roomId: string
    createdAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutSenderInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageCreateManySenderInputEnvelope = {
    data: MessageCreateManySenderInput | MessageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type FriendshipCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    friend: UserCreateNestedOneWithoutReceivedFriendsInput
  }

  export type FriendshipUncheckedCreateWithoutUserInput = {
    id?: string
    friendId: string
    createdAt?: Date | string
  }

  export type FriendshipCreateOrConnectWithoutUserInput = {
    where: FriendshipWhereUniqueInput
    create: XOR<FriendshipCreateWithoutUserInput, FriendshipUncheckedCreateWithoutUserInput>
  }

  export type FriendshipCreateManyUserInputEnvelope = {
    data: FriendshipCreateManyUserInput | FriendshipCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FriendshipCreateWithoutFriendInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSentFriendsInput
  }

  export type FriendshipUncheckedCreateWithoutFriendInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type FriendshipCreateOrConnectWithoutFriendInput = {
    where: FriendshipWhereUniqueInput
    create: XOR<FriendshipCreateWithoutFriendInput, FriendshipUncheckedCreateWithoutFriendInput>
  }

  export type FriendshipCreateManyFriendInputEnvelope = {
    data: FriendshipCreateManyFriendInput | FriendshipCreateManyFriendInput[]
    skipDuplicates?: boolean
  }

  export type ReportCreateWithoutUserInput = {
    id?: string
    reason: string
    createdAt?: Date | string
    reportedUser: UserCreateNestedOneWithoutReportedUserInput
  }

  export type ReportUncheckedCreateWithoutUserInput = {
    id?: string
    reportedId: string
    reason: string
    createdAt?: Date | string
  }

  export type ReportCreateOrConnectWithoutUserInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutUserInput, ReportUncheckedCreateWithoutUserInput>
  }

  export type ReportCreateManyUserInputEnvelope = {
    data: ReportCreateManyUserInput | ReportCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReportCreateWithoutReportedUserInput = {
    id?: string
    reason: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutUserReportedInput
  }

  export type ReportUncheckedCreateWithoutReportedUserInput = {
    id?: string
    userId: string
    reason: string
    createdAt?: Date | string
  }

  export type ReportCreateOrConnectWithoutReportedUserInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutReportedUserInput, ReportUncheckedCreateWithoutReportedUserInput>
  }

  export type ReportCreateManyReportedUserInputEnvelope = {
    data: ReportCreateManyReportedUserInput | ReportCreateManyReportedUserInput[]
    skipDuplicates?: boolean
  }

  export type MessageWithFreindsCreateWithoutSenderInput = {
    id?: string
    content: string
    type?: $Enums.MessageType
    createdAt?: Date | string
    receiver: UserCreateNestedOneWithoutMessagereceiverpersonInput
  }

  export type MessageWithFreindsUncheckedCreateWithoutSenderInput = {
    id?: string
    content: string
    type?: $Enums.MessageType
    receiverId: string
    createdAt?: Date | string
  }

  export type MessageWithFreindsCreateOrConnectWithoutSenderInput = {
    where: MessageWithFreindsWhereUniqueInput
    create: XOR<MessageWithFreindsCreateWithoutSenderInput, MessageWithFreindsUncheckedCreateWithoutSenderInput>
  }

  export type MessageWithFreindsCreateManySenderInputEnvelope = {
    data: MessageWithFreindsCreateManySenderInput | MessageWithFreindsCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type MessageWithFreindsCreateWithoutReceiverInput = {
    id?: string
    content: string
    type?: $Enums.MessageType
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutMessagesenderpersonInput
  }

  export type MessageWithFreindsUncheckedCreateWithoutReceiverInput = {
    id?: string
    content: string
    type?: $Enums.MessageType
    senderId: string
    createdAt?: Date | string
  }

  export type MessageWithFreindsCreateOrConnectWithoutReceiverInput = {
    where: MessageWithFreindsWhereUniqueInput
    create: XOR<MessageWithFreindsCreateWithoutReceiverInput, MessageWithFreindsUncheckedCreateWithoutReceiverInput>
  }

  export type MessageWithFreindsCreateManyReceiverInputEnvelope = {
    data: MessageWithFreindsCreateManyReceiverInput | MessageWithFreindsCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type MatchUpsertWithWhereUniqueWithoutUser1Input = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutUser1Input, MatchUncheckedUpdateWithoutUser1Input>
    create: XOR<MatchCreateWithoutUser1Input, MatchUncheckedCreateWithoutUser1Input>
  }

  export type MatchUpdateWithWhereUniqueWithoutUser1Input = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutUser1Input, MatchUncheckedUpdateWithoutUser1Input>
  }

  export type MatchUpdateManyWithWhereWithoutUser1Input = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutUser1Input>
  }

  export type MatchScalarWhereInput = {
    AND?: MatchScalarWhereInput | MatchScalarWhereInput[]
    OR?: MatchScalarWhereInput[]
    NOT?: MatchScalarWhereInput | MatchScalarWhereInput[]
    id?: StringFilter<"Match"> | string
    user1Id?: StringFilter<"Match"> | string
    user2Id?: StringFilter<"Match"> | string
    roomId?: StringNullableFilter<"Match"> | string | null
    startedAt?: DateTimeFilter<"Match"> | Date | string
    endedAt?: DateTimeNullableFilter<"Match"> | Date | string | null
  }

  export type MatchUpsertWithWhereUniqueWithoutUser2Input = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutUser2Input, MatchUncheckedUpdateWithoutUser2Input>
    create: XOR<MatchCreateWithoutUser2Input, MatchUncheckedCreateWithoutUser2Input>
  }

  export type MatchUpdateWithWhereUniqueWithoutUser2Input = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutUser2Input, MatchUncheckedUpdateWithoutUser2Input>
  }

  export type MatchUpdateManyWithWhereWithoutUser2Input = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutUser2Input>
  }

  export type HistoryUpsertWithWhereUniqueWithoutUser1Input = {
    where: HistoryWhereUniqueInput
    update: XOR<HistoryUpdateWithoutUser1Input, HistoryUncheckedUpdateWithoutUser1Input>
    create: XOR<HistoryCreateWithoutUser1Input, HistoryUncheckedCreateWithoutUser1Input>
  }

  export type HistoryUpdateWithWhereUniqueWithoutUser1Input = {
    where: HistoryWhereUniqueInput
    data: XOR<HistoryUpdateWithoutUser1Input, HistoryUncheckedUpdateWithoutUser1Input>
  }

  export type HistoryUpdateManyWithWhereWithoutUser1Input = {
    where: HistoryScalarWhereInput
    data: XOR<HistoryUpdateManyMutationInput, HistoryUncheckedUpdateManyWithoutUser1Input>
  }

  export type HistoryScalarWhereInput = {
    AND?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
    OR?: HistoryScalarWhereInput[]
    NOT?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
    id?: StringFilter<"History"> | string
    user1Id?: StringFilter<"History"> | string
    user2Id?: StringFilter<"History"> | string
    roomId?: StringNullableFilter<"History"> | string | null
    startedAt?: DateTimeFilter<"History"> | Date | string
    endedAt?: DateTimeNullableFilter<"History"> | Date | string | null
  }

  export type HistoryUpsertWithWhereUniqueWithoutUser2Input = {
    where: HistoryWhereUniqueInput
    update: XOR<HistoryUpdateWithoutUser2Input, HistoryUncheckedUpdateWithoutUser2Input>
    create: XOR<HistoryCreateWithoutUser2Input, HistoryUncheckedCreateWithoutUser2Input>
  }

  export type HistoryUpdateWithWhereUniqueWithoutUser2Input = {
    where: HistoryWhereUniqueInput
    data: XOR<HistoryUpdateWithoutUser2Input, HistoryUncheckedUpdateWithoutUser2Input>
  }

  export type HistoryUpdateManyWithWhereWithoutUser2Input = {
    where: HistoryScalarWhereInput
    data: XOR<HistoryUpdateManyMutationInput, HistoryUncheckedUpdateManyWithoutUser2Input>
  }

  export type RoomParticipantUpsertWithWhereUniqueWithoutUserInput = {
    where: RoomParticipantWhereUniqueInput
    update: XOR<RoomParticipantUpdateWithoutUserInput, RoomParticipantUncheckedUpdateWithoutUserInput>
    create: XOR<RoomParticipantCreateWithoutUserInput, RoomParticipantUncheckedCreateWithoutUserInput>
  }

  export type RoomParticipantUpdateWithWhereUniqueWithoutUserInput = {
    where: RoomParticipantWhereUniqueInput
    data: XOR<RoomParticipantUpdateWithoutUserInput, RoomParticipantUncheckedUpdateWithoutUserInput>
  }

  export type RoomParticipantUpdateManyWithWhereWithoutUserInput = {
    where: RoomParticipantScalarWhereInput
    data: XOR<RoomParticipantUpdateManyMutationInput, RoomParticipantUncheckedUpdateManyWithoutUserInput>
  }

  export type RoomParticipantScalarWhereInput = {
    AND?: RoomParticipantScalarWhereInput | RoomParticipantScalarWhereInput[]
    OR?: RoomParticipantScalarWhereInput[]
    NOT?: RoomParticipantScalarWhereInput | RoomParticipantScalarWhereInput[]
    id?: StringFilter<"RoomParticipant"> | string
    userId?: StringFilter<"RoomParticipant"> | string
    roomId?: StringFilter<"RoomParticipant"> | string
    joinedAt?: DateTimeFilter<"RoomParticipant"> | Date | string
    leftAt?: DateTimeNullableFilter<"RoomParticipant"> | Date | string | null
  }

  export type SubscriptionUpsertWithWhereUniqueWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    update: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
  }

  export type SubscriptionUpdateWithWhereUniqueWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    data: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type SubscriptionUpdateManyWithWhereWithoutUserInput = {
    where: SubscriptionScalarWhereInput
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyWithoutUserInput>
  }

  export type SubscriptionScalarWhereInput = {
    AND?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    OR?: SubscriptionScalarWhereInput[]
    NOT?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    id?: StringFilter<"Subscription"> | string
    userId?: StringFilter<"Subscription"> | string
    plan?: StringFilter<"Subscription"> | string
    startDate?: DateTimeFilter<"Subscription"> | Date | string
    endDate?: DateTimeFilter<"Subscription"> | Date | string
    razorpayId?: StringNullableFilter<"Subscription"> | string | null
    paymentStatus?: StringFilter<"Subscription"> | string
  }

  export type AITranscriptUpsertWithWhereUniqueWithoutUserInput = {
    where: AITranscriptWhereUniqueInput
    update: XOR<AITranscriptUpdateWithoutUserInput, AITranscriptUncheckedUpdateWithoutUserInput>
    create: XOR<AITranscriptCreateWithoutUserInput, AITranscriptUncheckedCreateWithoutUserInput>
  }

  export type AITranscriptUpdateWithWhereUniqueWithoutUserInput = {
    where: AITranscriptWhereUniqueInput
    data: XOR<AITranscriptUpdateWithoutUserInput, AITranscriptUncheckedUpdateWithoutUserInput>
  }

  export type AITranscriptUpdateManyWithWhereWithoutUserInput = {
    where: AITranscriptScalarWhereInput
    data: XOR<AITranscriptUpdateManyMutationInput, AITranscriptUncheckedUpdateManyWithoutUserInput>
  }

  export type AITranscriptScalarWhereInput = {
    AND?: AITranscriptScalarWhereInput | AITranscriptScalarWhereInput[]
    OR?: AITranscriptScalarWhereInput[]
    NOT?: AITranscriptScalarWhereInput | AITranscriptScalarWhereInput[]
    id?: StringFilter<"AITranscript"> | string
    roomId?: StringFilter<"AITranscript"> | string
    userId?: StringFilter<"AITranscript"> | string
    text?: StringFilter<"AITranscript"> | string
    lang?: StringFilter<"AITranscript"> | string
    isTranslated?: BoolFilter<"AITranscript"> | boolean
    translatedText?: StringNullableFilter<"AITranscript"> | string | null
    createdAt?: DateTimeFilter<"AITranscript"> | Date | string
  }

  export type MessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
  }

  export type MessageUpdateManyWithWhereWithoutSenderInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    senderId?: StringFilter<"Message"> | string
    roomId?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
  }

  export type FriendshipUpsertWithWhereUniqueWithoutUserInput = {
    where: FriendshipWhereUniqueInput
    update: XOR<FriendshipUpdateWithoutUserInput, FriendshipUncheckedUpdateWithoutUserInput>
    create: XOR<FriendshipCreateWithoutUserInput, FriendshipUncheckedCreateWithoutUserInput>
  }

  export type FriendshipUpdateWithWhereUniqueWithoutUserInput = {
    where: FriendshipWhereUniqueInput
    data: XOR<FriendshipUpdateWithoutUserInput, FriendshipUncheckedUpdateWithoutUserInput>
  }

  export type FriendshipUpdateManyWithWhereWithoutUserInput = {
    where: FriendshipScalarWhereInput
    data: XOR<FriendshipUpdateManyMutationInput, FriendshipUncheckedUpdateManyWithoutUserInput>
  }

  export type FriendshipScalarWhereInput = {
    AND?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
    OR?: FriendshipScalarWhereInput[]
    NOT?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
    id?: StringFilter<"Friendship"> | string
    userId?: StringFilter<"Friendship"> | string
    friendId?: StringFilter<"Friendship"> | string
    createdAt?: DateTimeFilter<"Friendship"> | Date | string
  }

  export type FriendshipUpsertWithWhereUniqueWithoutFriendInput = {
    where: FriendshipWhereUniqueInput
    update: XOR<FriendshipUpdateWithoutFriendInput, FriendshipUncheckedUpdateWithoutFriendInput>
    create: XOR<FriendshipCreateWithoutFriendInput, FriendshipUncheckedCreateWithoutFriendInput>
  }

  export type FriendshipUpdateWithWhereUniqueWithoutFriendInput = {
    where: FriendshipWhereUniqueInput
    data: XOR<FriendshipUpdateWithoutFriendInput, FriendshipUncheckedUpdateWithoutFriendInput>
  }

  export type FriendshipUpdateManyWithWhereWithoutFriendInput = {
    where: FriendshipScalarWhereInput
    data: XOR<FriendshipUpdateManyMutationInput, FriendshipUncheckedUpdateManyWithoutFriendInput>
  }

  export type ReportUpsertWithWhereUniqueWithoutUserInput = {
    where: ReportWhereUniqueInput
    update: XOR<ReportUpdateWithoutUserInput, ReportUncheckedUpdateWithoutUserInput>
    create: XOR<ReportCreateWithoutUserInput, ReportUncheckedCreateWithoutUserInput>
  }

  export type ReportUpdateWithWhereUniqueWithoutUserInput = {
    where: ReportWhereUniqueInput
    data: XOR<ReportUpdateWithoutUserInput, ReportUncheckedUpdateWithoutUserInput>
  }

  export type ReportUpdateManyWithWhereWithoutUserInput = {
    where: ReportScalarWhereInput
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyWithoutUserInput>
  }

  export type ReportScalarWhereInput = {
    AND?: ReportScalarWhereInput | ReportScalarWhereInput[]
    OR?: ReportScalarWhereInput[]
    NOT?: ReportScalarWhereInput | ReportScalarWhereInput[]
    id?: StringFilter<"Report"> | string
    userId?: StringFilter<"Report"> | string
    reportedId?: StringFilter<"Report"> | string
    reason?: StringFilter<"Report"> | string
    createdAt?: DateTimeFilter<"Report"> | Date | string
  }

  export type ReportUpsertWithWhereUniqueWithoutReportedUserInput = {
    where: ReportWhereUniqueInput
    update: XOR<ReportUpdateWithoutReportedUserInput, ReportUncheckedUpdateWithoutReportedUserInput>
    create: XOR<ReportCreateWithoutReportedUserInput, ReportUncheckedCreateWithoutReportedUserInput>
  }

  export type ReportUpdateWithWhereUniqueWithoutReportedUserInput = {
    where: ReportWhereUniqueInput
    data: XOR<ReportUpdateWithoutReportedUserInput, ReportUncheckedUpdateWithoutReportedUserInput>
  }

  export type ReportUpdateManyWithWhereWithoutReportedUserInput = {
    where: ReportScalarWhereInput
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyWithoutReportedUserInput>
  }

  export type MessageWithFreindsUpsertWithWhereUniqueWithoutSenderInput = {
    where: MessageWithFreindsWhereUniqueInput
    update: XOR<MessageWithFreindsUpdateWithoutSenderInput, MessageWithFreindsUncheckedUpdateWithoutSenderInput>
    create: XOR<MessageWithFreindsCreateWithoutSenderInput, MessageWithFreindsUncheckedCreateWithoutSenderInput>
  }

  export type MessageWithFreindsUpdateWithWhereUniqueWithoutSenderInput = {
    where: MessageWithFreindsWhereUniqueInput
    data: XOR<MessageWithFreindsUpdateWithoutSenderInput, MessageWithFreindsUncheckedUpdateWithoutSenderInput>
  }

  export type MessageWithFreindsUpdateManyWithWhereWithoutSenderInput = {
    where: MessageWithFreindsScalarWhereInput
    data: XOR<MessageWithFreindsUpdateManyMutationInput, MessageWithFreindsUncheckedUpdateManyWithoutSenderInput>
  }

  export type MessageWithFreindsScalarWhereInput = {
    AND?: MessageWithFreindsScalarWhereInput | MessageWithFreindsScalarWhereInput[]
    OR?: MessageWithFreindsScalarWhereInput[]
    NOT?: MessageWithFreindsScalarWhereInput | MessageWithFreindsScalarWhereInput[]
    id?: StringFilter<"MessageWithFreinds"> | string
    content?: StringFilter<"MessageWithFreinds"> | string
    type?: EnumMessageTypeFilter<"MessageWithFreinds"> | $Enums.MessageType
    senderId?: StringFilter<"MessageWithFreinds"> | string
    receiverId?: StringFilter<"MessageWithFreinds"> | string
    createdAt?: DateTimeFilter<"MessageWithFreinds"> | Date | string
  }

  export type MessageWithFreindsUpsertWithWhereUniqueWithoutReceiverInput = {
    where: MessageWithFreindsWhereUniqueInput
    update: XOR<MessageWithFreindsUpdateWithoutReceiverInput, MessageWithFreindsUncheckedUpdateWithoutReceiverInput>
    create: XOR<MessageWithFreindsCreateWithoutReceiverInput, MessageWithFreindsUncheckedCreateWithoutReceiverInput>
  }

  export type MessageWithFreindsUpdateWithWhereUniqueWithoutReceiverInput = {
    where: MessageWithFreindsWhereUniqueInput
    data: XOR<MessageWithFreindsUpdateWithoutReceiverInput, MessageWithFreindsUncheckedUpdateWithoutReceiverInput>
  }

  export type MessageWithFreindsUpdateManyWithWhereWithoutReceiverInput = {
    where: MessageWithFreindsScalarWhereInput
    data: XOR<MessageWithFreindsUpdateManyMutationInput, MessageWithFreindsUncheckedUpdateManyWithoutReceiverInput>
  }

  export type UserCreateWithoutMatchesAsUser1Input = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    gender: $Enums.Gender
    dob?: Date | string
    country?: string | null
    state?: string | null
    city?: string | null
    latitude?: number | null
    longitude?: number | null
    isPremium?: boolean
    interests?: UserCreateinterestsInput | $Enums.Interest[]
    preferredLang?: UserCreatepreferredLangInput | $Enums.Language[]
    createdAt?: Date | string
    updatedAt?: Date | string
    matchesAsUser2?: MatchCreateNestedManyWithoutUser2Input
    historyAsUser1?: HistoryCreateNestedManyWithoutUser1Input
    historyAsUser2?: HistoryCreateNestedManyWithoutUser2Input
    roomsJoined?: RoomParticipantCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    aitranscripts?: AITranscriptCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    sentFriends?: FriendshipCreateNestedManyWithoutUserInput
    receivedFriends?: FriendshipCreateNestedManyWithoutFriendInput
    userReported?: ReportCreateNestedManyWithoutUserInput
    reportedUser?: ReportCreateNestedManyWithoutReportedUserInput
    messagesenderperson?: MessageWithFreindsCreateNestedManyWithoutSenderInput
    messagereceiverperson?: MessageWithFreindsCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutMatchesAsUser1Input = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    gender: $Enums.Gender
    dob?: Date | string
    country?: string | null
    state?: string | null
    city?: string | null
    latitude?: number | null
    longitude?: number | null
    isPremium?: boolean
    interests?: UserCreateinterestsInput | $Enums.Interest[]
    preferredLang?: UserCreatepreferredLangInput | $Enums.Language[]
    createdAt?: Date | string
    updatedAt?: Date | string
    matchesAsUser2?: MatchUncheckedCreateNestedManyWithoutUser2Input
    historyAsUser1?: HistoryUncheckedCreateNestedManyWithoutUser1Input
    historyAsUser2?: HistoryUncheckedCreateNestedManyWithoutUser2Input
    roomsJoined?: RoomParticipantUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    aitranscripts?: AITranscriptUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    sentFriends?: FriendshipUncheckedCreateNestedManyWithoutUserInput
    receivedFriends?: FriendshipUncheckedCreateNestedManyWithoutFriendInput
    userReported?: ReportUncheckedCreateNestedManyWithoutUserInput
    reportedUser?: ReportUncheckedCreateNestedManyWithoutReportedUserInput
    messagesenderperson?: MessageWithFreindsUncheckedCreateNestedManyWithoutSenderInput
    messagereceiverperson?: MessageWithFreindsUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutMatchesAsUser1Input = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMatchesAsUser1Input, UserUncheckedCreateWithoutMatchesAsUser1Input>
  }

  export type UserCreateWithoutMatchesAsUser2Input = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    gender: $Enums.Gender
    dob?: Date | string
    country?: string | null
    state?: string | null
    city?: string | null
    latitude?: number | null
    longitude?: number | null
    isPremium?: boolean
    interests?: UserCreateinterestsInput | $Enums.Interest[]
    preferredLang?: UserCreatepreferredLangInput | $Enums.Language[]
    createdAt?: Date | string
    updatedAt?: Date | string
    matchesAsUser1?: MatchCreateNestedManyWithoutUser1Input
    historyAsUser1?: HistoryCreateNestedManyWithoutUser1Input
    historyAsUser2?: HistoryCreateNestedManyWithoutUser2Input
    roomsJoined?: RoomParticipantCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    aitranscripts?: AITranscriptCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    sentFriends?: FriendshipCreateNestedManyWithoutUserInput
    receivedFriends?: FriendshipCreateNestedManyWithoutFriendInput
    userReported?: ReportCreateNestedManyWithoutUserInput
    reportedUser?: ReportCreateNestedManyWithoutReportedUserInput
    messagesenderperson?: MessageWithFreindsCreateNestedManyWithoutSenderInput
    messagereceiverperson?: MessageWithFreindsCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutMatchesAsUser2Input = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    gender: $Enums.Gender
    dob?: Date | string
    country?: string | null
    state?: string | null
    city?: string | null
    latitude?: number | null
    longitude?: number | null
    isPremium?: boolean
    interests?: UserCreateinterestsInput | $Enums.Interest[]
    preferredLang?: UserCreatepreferredLangInput | $Enums.Language[]
    createdAt?: Date | string
    updatedAt?: Date | string
    matchesAsUser1?: MatchUncheckedCreateNestedManyWithoutUser1Input
    historyAsUser1?: HistoryUncheckedCreateNestedManyWithoutUser1Input
    historyAsUser2?: HistoryUncheckedCreateNestedManyWithoutUser2Input
    roomsJoined?: RoomParticipantUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    aitranscripts?: AITranscriptUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    sentFriends?: FriendshipUncheckedCreateNestedManyWithoutUserInput
    receivedFriends?: FriendshipUncheckedCreateNestedManyWithoutFriendInput
    userReported?: ReportUncheckedCreateNestedManyWithoutUserInput
    reportedUser?: ReportUncheckedCreateNestedManyWithoutReportedUserInput
    messagesenderperson?: MessageWithFreindsUncheckedCreateNestedManyWithoutSenderInput
    messagereceiverperson?: MessageWithFreindsUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutMatchesAsUser2Input = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMatchesAsUser2Input, UserUncheckedCreateWithoutMatchesAsUser2Input>
  }

  export type RoomCreateWithoutMatchesInput = {
    id?: string
    isActive?: boolean
    createdAt?: Date | string
    endedAt?: Date | string | null
    participants?: RoomParticipantCreateNestedManyWithoutRoomInput
    messages?: MessageCreateNestedManyWithoutRoomInput
    aiEvents?: AITranscriptCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutMatchesInput = {
    id?: string
    isActive?: boolean
    createdAt?: Date | string
    endedAt?: Date | string | null
    participants?: RoomParticipantUncheckedCreateNestedManyWithoutRoomInput
    messages?: MessageUncheckedCreateNestedManyWithoutRoomInput
    aiEvents?: AITranscriptUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutMatchesInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutMatchesInput, RoomUncheckedCreateWithoutMatchesInput>
  }

  export type UserUpsertWithoutMatchesAsUser1Input = {
    update: XOR<UserUpdateWithoutMatchesAsUser1Input, UserUncheckedUpdateWithoutMatchesAsUser1Input>
    create: XOR<UserCreateWithoutMatchesAsUser1Input, UserUncheckedCreateWithoutMatchesAsUser1Input>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMatchesAsUser1Input = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMatchesAsUser1Input, UserUncheckedUpdateWithoutMatchesAsUser1Input>
  }

  export type UserUpdateWithoutMatchesAsUser1Input = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | $Enums.Interest[]
    preferredLang?: UserUpdatepreferredLangInput | $Enums.Language[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchesAsUser2?: MatchUpdateManyWithoutUser2NestedInput
    historyAsUser1?: HistoryUpdateManyWithoutUser1NestedInput
    historyAsUser2?: HistoryUpdateManyWithoutUser2NestedInput
    roomsJoined?: RoomParticipantUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    aitranscripts?: AITranscriptUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    sentFriends?: FriendshipUpdateManyWithoutUserNestedInput
    receivedFriends?: FriendshipUpdateManyWithoutFriendNestedInput
    userReported?: ReportUpdateManyWithoutUserNestedInput
    reportedUser?: ReportUpdateManyWithoutReportedUserNestedInput
    messagesenderperson?: MessageWithFreindsUpdateManyWithoutSenderNestedInput
    messagereceiverperson?: MessageWithFreindsUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutMatchesAsUser1Input = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | $Enums.Interest[]
    preferredLang?: UserUpdatepreferredLangInput | $Enums.Language[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchesAsUser2?: MatchUncheckedUpdateManyWithoutUser2NestedInput
    historyAsUser1?: HistoryUncheckedUpdateManyWithoutUser1NestedInput
    historyAsUser2?: HistoryUncheckedUpdateManyWithoutUser2NestedInput
    roomsJoined?: RoomParticipantUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    aitranscripts?: AITranscriptUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    sentFriends?: FriendshipUncheckedUpdateManyWithoutUserNestedInput
    receivedFriends?: FriendshipUncheckedUpdateManyWithoutFriendNestedInput
    userReported?: ReportUncheckedUpdateManyWithoutUserNestedInput
    reportedUser?: ReportUncheckedUpdateManyWithoutReportedUserNestedInput
    messagesenderperson?: MessageWithFreindsUncheckedUpdateManyWithoutSenderNestedInput
    messagereceiverperson?: MessageWithFreindsUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserUpsertWithoutMatchesAsUser2Input = {
    update: XOR<UserUpdateWithoutMatchesAsUser2Input, UserUncheckedUpdateWithoutMatchesAsUser2Input>
    create: XOR<UserCreateWithoutMatchesAsUser2Input, UserUncheckedCreateWithoutMatchesAsUser2Input>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMatchesAsUser2Input = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMatchesAsUser2Input, UserUncheckedUpdateWithoutMatchesAsUser2Input>
  }

  export type UserUpdateWithoutMatchesAsUser2Input = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | $Enums.Interest[]
    preferredLang?: UserUpdatepreferredLangInput | $Enums.Language[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchesAsUser1?: MatchUpdateManyWithoutUser1NestedInput
    historyAsUser1?: HistoryUpdateManyWithoutUser1NestedInput
    historyAsUser2?: HistoryUpdateManyWithoutUser2NestedInput
    roomsJoined?: RoomParticipantUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    aitranscripts?: AITranscriptUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    sentFriends?: FriendshipUpdateManyWithoutUserNestedInput
    receivedFriends?: FriendshipUpdateManyWithoutFriendNestedInput
    userReported?: ReportUpdateManyWithoutUserNestedInput
    reportedUser?: ReportUpdateManyWithoutReportedUserNestedInput
    messagesenderperson?: MessageWithFreindsUpdateManyWithoutSenderNestedInput
    messagereceiverperson?: MessageWithFreindsUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutMatchesAsUser2Input = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | $Enums.Interest[]
    preferredLang?: UserUpdatepreferredLangInput | $Enums.Language[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchesAsUser1?: MatchUncheckedUpdateManyWithoutUser1NestedInput
    historyAsUser1?: HistoryUncheckedUpdateManyWithoutUser1NestedInput
    historyAsUser2?: HistoryUncheckedUpdateManyWithoutUser2NestedInput
    roomsJoined?: RoomParticipantUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    aitranscripts?: AITranscriptUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    sentFriends?: FriendshipUncheckedUpdateManyWithoutUserNestedInput
    receivedFriends?: FriendshipUncheckedUpdateManyWithoutFriendNestedInput
    userReported?: ReportUncheckedUpdateManyWithoutUserNestedInput
    reportedUser?: ReportUncheckedUpdateManyWithoutReportedUserNestedInput
    messagesenderperson?: MessageWithFreindsUncheckedUpdateManyWithoutSenderNestedInput
    messagereceiverperson?: MessageWithFreindsUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type RoomUpsertWithoutMatchesInput = {
    update: XOR<RoomUpdateWithoutMatchesInput, RoomUncheckedUpdateWithoutMatchesInput>
    create: XOR<RoomCreateWithoutMatchesInput, RoomUncheckedCreateWithoutMatchesInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutMatchesInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutMatchesInput, RoomUncheckedUpdateWithoutMatchesInput>
  }

  export type RoomUpdateWithoutMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    participants?: RoomParticipantUpdateManyWithoutRoomNestedInput
    messages?: MessageUpdateManyWithoutRoomNestedInput
    aiEvents?: AITranscriptUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    participants?: RoomParticipantUncheckedUpdateManyWithoutRoomNestedInput
    messages?: MessageUncheckedUpdateManyWithoutRoomNestedInput
    aiEvents?: AITranscriptUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomParticipantCreateWithoutRoomInput = {
    id?: string
    joinedAt?: Date | string
    leftAt?: Date | string | null
    user: UserCreateNestedOneWithoutRoomsJoinedInput
  }

  export type RoomParticipantUncheckedCreateWithoutRoomInput = {
    id?: string
    userId: string
    joinedAt?: Date | string
    leftAt?: Date | string | null
  }

  export type RoomParticipantCreateOrConnectWithoutRoomInput = {
    where: RoomParticipantWhereUniqueInput
    create: XOR<RoomParticipantCreateWithoutRoomInput, RoomParticipantUncheckedCreateWithoutRoomInput>
  }

  export type RoomParticipantCreateManyRoomInputEnvelope = {
    data: RoomParticipantCreateManyRoomInput | RoomParticipantCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutRoomInput = {
    id?: string
    content: string
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutRoomInput = {
    id?: string
    content: string
    senderId: string
    createdAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutRoomInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutRoomInput, MessageUncheckedCreateWithoutRoomInput>
  }

  export type MessageCreateManyRoomInputEnvelope = {
    data: MessageCreateManyRoomInput | MessageCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type AITranscriptCreateWithoutRoomInput = {
    id?: string
    text: string
    lang: string
    isTranslated?: boolean
    translatedText?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAitranscriptsInput
  }

  export type AITranscriptUncheckedCreateWithoutRoomInput = {
    id?: string
    userId: string
    text: string
    lang: string
    isTranslated?: boolean
    translatedText?: string | null
    createdAt?: Date | string
  }

  export type AITranscriptCreateOrConnectWithoutRoomInput = {
    where: AITranscriptWhereUniqueInput
    create: XOR<AITranscriptCreateWithoutRoomInput, AITranscriptUncheckedCreateWithoutRoomInput>
  }

  export type AITranscriptCreateManyRoomInputEnvelope = {
    data: AITranscriptCreateManyRoomInput | AITranscriptCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type MatchCreateWithoutRoomInput = {
    id?: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    user1: UserCreateNestedOneWithoutMatchesAsUser1Input
    user2: UserCreateNestedOneWithoutMatchesAsUser2Input
  }

  export type MatchUncheckedCreateWithoutRoomInput = {
    id?: string
    user1Id: string
    user2Id: string
    startedAt?: Date | string
    endedAt?: Date | string | null
  }

  export type MatchCreateOrConnectWithoutRoomInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutRoomInput, MatchUncheckedCreateWithoutRoomInput>
  }

  export type MatchCreateManyRoomInputEnvelope = {
    data: MatchCreateManyRoomInput | MatchCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type RoomParticipantUpsertWithWhereUniqueWithoutRoomInput = {
    where: RoomParticipantWhereUniqueInput
    update: XOR<RoomParticipantUpdateWithoutRoomInput, RoomParticipantUncheckedUpdateWithoutRoomInput>
    create: XOR<RoomParticipantCreateWithoutRoomInput, RoomParticipantUncheckedCreateWithoutRoomInput>
  }

  export type RoomParticipantUpdateWithWhereUniqueWithoutRoomInput = {
    where: RoomParticipantWhereUniqueInput
    data: XOR<RoomParticipantUpdateWithoutRoomInput, RoomParticipantUncheckedUpdateWithoutRoomInput>
  }

  export type RoomParticipantUpdateManyWithWhereWithoutRoomInput = {
    where: RoomParticipantScalarWhereInput
    data: XOR<RoomParticipantUpdateManyMutationInput, RoomParticipantUncheckedUpdateManyWithoutRoomInput>
  }

  export type MessageUpsertWithWhereUniqueWithoutRoomInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutRoomInput, MessageUncheckedUpdateWithoutRoomInput>
    create: XOR<MessageCreateWithoutRoomInput, MessageUncheckedCreateWithoutRoomInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutRoomInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutRoomInput, MessageUncheckedUpdateWithoutRoomInput>
  }

  export type MessageUpdateManyWithWhereWithoutRoomInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutRoomInput>
  }

  export type AITranscriptUpsertWithWhereUniqueWithoutRoomInput = {
    where: AITranscriptWhereUniqueInput
    update: XOR<AITranscriptUpdateWithoutRoomInput, AITranscriptUncheckedUpdateWithoutRoomInput>
    create: XOR<AITranscriptCreateWithoutRoomInput, AITranscriptUncheckedCreateWithoutRoomInput>
  }

  export type AITranscriptUpdateWithWhereUniqueWithoutRoomInput = {
    where: AITranscriptWhereUniqueInput
    data: XOR<AITranscriptUpdateWithoutRoomInput, AITranscriptUncheckedUpdateWithoutRoomInput>
  }

  export type AITranscriptUpdateManyWithWhereWithoutRoomInput = {
    where: AITranscriptScalarWhereInput
    data: XOR<AITranscriptUpdateManyMutationInput, AITranscriptUncheckedUpdateManyWithoutRoomInput>
  }

  export type MatchUpsertWithWhereUniqueWithoutRoomInput = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutRoomInput, MatchUncheckedUpdateWithoutRoomInput>
    create: XOR<MatchCreateWithoutRoomInput, MatchUncheckedCreateWithoutRoomInput>
  }

  export type MatchUpdateWithWhereUniqueWithoutRoomInput = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutRoomInput, MatchUncheckedUpdateWithoutRoomInput>
  }

  export type MatchUpdateManyWithWhereWithoutRoomInput = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutRoomInput>
  }

  export type UserCreateWithoutRoomsJoinedInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    gender: $Enums.Gender
    dob?: Date | string
    country?: string | null
    state?: string | null
    city?: string | null
    latitude?: number | null
    longitude?: number | null
    isPremium?: boolean
    interests?: UserCreateinterestsInput | $Enums.Interest[]
    preferredLang?: UserCreatepreferredLangInput | $Enums.Language[]
    createdAt?: Date | string
    updatedAt?: Date | string
    matchesAsUser1?: MatchCreateNestedManyWithoutUser1Input
    matchesAsUser2?: MatchCreateNestedManyWithoutUser2Input
    historyAsUser1?: HistoryCreateNestedManyWithoutUser1Input
    historyAsUser2?: HistoryCreateNestedManyWithoutUser2Input
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    aitranscripts?: AITranscriptCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    sentFriends?: FriendshipCreateNestedManyWithoutUserInput
    receivedFriends?: FriendshipCreateNestedManyWithoutFriendInput
    userReported?: ReportCreateNestedManyWithoutUserInput
    reportedUser?: ReportCreateNestedManyWithoutReportedUserInput
    messagesenderperson?: MessageWithFreindsCreateNestedManyWithoutSenderInput
    messagereceiverperson?: MessageWithFreindsCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutRoomsJoinedInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    gender: $Enums.Gender
    dob?: Date | string
    country?: string | null
    state?: string | null
    city?: string | null
    latitude?: number | null
    longitude?: number | null
    isPremium?: boolean
    interests?: UserCreateinterestsInput | $Enums.Interest[]
    preferredLang?: UserCreatepreferredLangInput | $Enums.Language[]
    createdAt?: Date | string
    updatedAt?: Date | string
    matchesAsUser1?: MatchUncheckedCreateNestedManyWithoutUser1Input
    matchesAsUser2?: MatchUncheckedCreateNestedManyWithoutUser2Input
    historyAsUser1?: HistoryUncheckedCreateNestedManyWithoutUser1Input
    historyAsUser2?: HistoryUncheckedCreateNestedManyWithoutUser2Input
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    aitranscripts?: AITranscriptUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    sentFriends?: FriendshipUncheckedCreateNestedManyWithoutUserInput
    receivedFriends?: FriendshipUncheckedCreateNestedManyWithoutFriendInput
    userReported?: ReportUncheckedCreateNestedManyWithoutUserInput
    reportedUser?: ReportUncheckedCreateNestedManyWithoutReportedUserInput
    messagesenderperson?: MessageWithFreindsUncheckedCreateNestedManyWithoutSenderInput
    messagereceiverperson?: MessageWithFreindsUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutRoomsJoinedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoomsJoinedInput, UserUncheckedCreateWithoutRoomsJoinedInput>
  }

  export type RoomCreateWithoutParticipantsInput = {
    id?: string
    isActive?: boolean
    createdAt?: Date | string
    endedAt?: Date | string | null
    messages?: MessageCreateNestedManyWithoutRoomInput
    aiEvents?: AITranscriptCreateNestedManyWithoutRoomInput
    matches?: MatchCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutParticipantsInput = {
    id?: string
    isActive?: boolean
    createdAt?: Date | string
    endedAt?: Date | string | null
    messages?: MessageUncheckedCreateNestedManyWithoutRoomInput
    aiEvents?: AITranscriptUncheckedCreateNestedManyWithoutRoomInput
    matches?: MatchUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutParticipantsInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutParticipantsInput, RoomUncheckedCreateWithoutParticipantsInput>
  }

  export type UserUpsertWithoutRoomsJoinedInput = {
    update: XOR<UserUpdateWithoutRoomsJoinedInput, UserUncheckedUpdateWithoutRoomsJoinedInput>
    create: XOR<UserCreateWithoutRoomsJoinedInput, UserUncheckedCreateWithoutRoomsJoinedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRoomsJoinedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRoomsJoinedInput, UserUncheckedUpdateWithoutRoomsJoinedInput>
  }

  export type UserUpdateWithoutRoomsJoinedInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | $Enums.Interest[]
    preferredLang?: UserUpdatepreferredLangInput | $Enums.Language[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchesAsUser1?: MatchUpdateManyWithoutUser1NestedInput
    matchesAsUser2?: MatchUpdateManyWithoutUser2NestedInput
    historyAsUser1?: HistoryUpdateManyWithoutUser1NestedInput
    historyAsUser2?: HistoryUpdateManyWithoutUser2NestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    aitranscripts?: AITranscriptUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    sentFriends?: FriendshipUpdateManyWithoutUserNestedInput
    receivedFriends?: FriendshipUpdateManyWithoutFriendNestedInput
    userReported?: ReportUpdateManyWithoutUserNestedInput
    reportedUser?: ReportUpdateManyWithoutReportedUserNestedInput
    messagesenderperson?: MessageWithFreindsUpdateManyWithoutSenderNestedInput
    messagereceiverperson?: MessageWithFreindsUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutRoomsJoinedInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | $Enums.Interest[]
    preferredLang?: UserUpdatepreferredLangInput | $Enums.Language[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchesAsUser1?: MatchUncheckedUpdateManyWithoutUser1NestedInput
    matchesAsUser2?: MatchUncheckedUpdateManyWithoutUser2NestedInput
    historyAsUser1?: HistoryUncheckedUpdateManyWithoutUser1NestedInput
    historyAsUser2?: HistoryUncheckedUpdateManyWithoutUser2NestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    aitranscripts?: AITranscriptUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    sentFriends?: FriendshipUncheckedUpdateManyWithoutUserNestedInput
    receivedFriends?: FriendshipUncheckedUpdateManyWithoutFriendNestedInput
    userReported?: ReportUncheckedUpdateManyWithoutUserNestedInput
    reportedUser?: ReportUncheckedUpdateManyWithoutReportedUserNestedInput
    messagesenderperson?: MessageWithFreindsUncheckedUpdateManyWithoutSenderNestedInput
    messagereceiverperson?: MessageWithFreindsUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type RoomUpsertWithoutParticipantsInput = {
    update: XOR<RoomUpdateWithoutParticipantsInput, RoomUncheckedUpdateWithoutParticipantsInput>
    create: XOR<RoomCreateWithoutParticipantsInput, RoomUncheckedCreateWithoutParticipantsInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutParticipantsInput, RoomUncheckedUpdateWithoutParticipantsInput>
  }

  export type RoomUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messages?: MessageUpdateManyWithoutRoomNestedInput
    aiEvents?: AITranscriptUpdateManyWithoutRoomNestedInput
    matches?: MatchUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messages?: MessageUncheckedUpdateManyWithoutRoomNestedInput
    aiEvents?: AITranscriptUncheckedUpdateManyWithoutRoomNestedInput
    matches?: MatchUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type UserCreateWithoutMessagesInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    gender: $Enums.Gender
    dob?: Date | string
    country?: string | null
    state?: string | null
    city?: string | null
    latitude?: number | null
    longitude?: number | null
    isPremium?: boolean
    interests?: UserCreateinterestsInput | $Enums.Interest[]
    preferredLang?: UserCreatepreferredLangInput | $Enums.Language[]
    createdAt?: Date | string
    updatedAt?: Date | string
    matchesAsUser1?: MatchCreateNestedManyWithoutUser1Input
    matchesAsUser2?: MatchCreateNestedManyWithoutUser2Input
    historyAsUser1?: HistoryCreateNestedManyWithoutUser1Input
    historyAsUser2?: HistoryCreateNestedManyWithoutUser2Input
    roomsJoined?: RoomParticipantCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    aitranscripts?: AITranscriptCreateNestedManyWithoutUserInput
    sentFriends?: FriendshipCreateNestedManyWithoutUserInput
    receivedFriends?: FriendshipCreateNestedManyWithoutFriendInput
    userReported?: ReportCreateNestedManyWithoutUserInput
    reportedUser?: ReportCreateNestedManyWithoutReportedUserInput
    messagesenderperson?: MessageWithFreindsCreateNestedManyWithoutSenderInput
    messagereceiverperson?: MessageWithFreindsCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutMessagesInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    gender: $Enums.Gender
    dob?: Date | string
    country?: string | null
    state?: string | null
    city?: string | null
    latitude?: number | null
    longitude?: number | null
    isPremium?: boolean
    interests?: UserCreateinterestsInput | $Enums.Interest[]
    preferredLang?: UserCreatepreferredLangInput | $Enums.Language[]
    createdAt?: Date | string
    updatedAt?: Date | string
    matchesAsUser1?: MatchUncheckedCreateNestedManyWithoutUser1Input
    matchesAsUser2?: MatchUncheckedCreateNestedManyWithoutUser2Input
    historyAsUser1?: HistoryUncheckedCreateNestedManyWithoutUser1Input
    historyAsUser2?: HistoryUncheckedCreateNestedManyWithoutUser2Input
    roomsJoined?: RoomParticipantUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    aitranscripts?: AITranscriptUncheckedCreateNestedManyWithoutUserInput
    sentFriends?: FriendshipUncheckedCreateNestedManyWithoutUserInput
    receivedFriends?: FriendshipUncheckedCreateNestedManyWithoutFriendInput
    userReported?: ReportUncheckedCreateNestedManyWithoutUserInput
    reportedUser?: ReportUncheckedCreateNestedManyWithoutReportedUserInput
    messagesenderperson?: MessageWithFreindsUncheckedCreateNestedManyWithoutSenderInput
    messagereceiverperson?: MessageWithFreindsUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
  }

  export type RoomCreateWithoutMessagesInput = {
    id?: string
    isActive?: boolean
    createdAt?: Date | string
    endedAt?: Date | string | null
    participants?: RoomParticipantCreateNestedManyWithoutRoomInput
    aiEvents?: AITranscriptCreateNestedManyWithoutRoomInput
    matches?: MatchCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutMessagesInput = {
    id?: string
    isActive?: boolean
    createdAt?: Date | string
    endedAt?: Date | string | null
    participants?: RoomParticipantUncheckedCreateNestedManyWithoutRoomInput
    aiEvents?: AITranscriptUncheckedCreateNestedManyWithoutRoomInput
    matches?: MatchUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutMessagesInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutMessagesInput, RoomUncheckedCreateWithoutMessagesInput>
  }

  export type UserUpsertWithoutMessagesInput = {
    update: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | $Enums.Interest[]
    preferredLang?: UserUpdatepreferredLangInput | $Enums.Language[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchesAsUser1?: MatchUpdateManyWithoutUser1NestedInput
    matchesAsUser2?: MatchUpdateManyWithoutUser2NestedInput
    historyAsUser1?: HistoryUpdateManyWithoutUser1NestedInput
    historyAsUser2?: HistoryUpdateManyWithoutUser2NestedInput
    roomsJoined?: RoomParticipantUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    aitranscripts?: AITranscriptUpdateManyWithoutUserNestedInput
    sentFriends?: FriendshipUpdateManyWithoutUserNestedInput
    receivedFriends?: FriendshipUpdateManyWithoutFriendNestedInput
    userReported?: ReportUpdateManyWithoutUserNestedInput
    reportedUser?: ReportUpdateManyWithoutReportedUserNestedInput
    messagesenderperson?: MessageWithFreindsUpdateManyWithoutSenderNestedInput
    messagereceiverperson?: MessageWithFreindsUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | $Enums.Interest[]
    preferredLang?: UserUpdatepreferredLangInput | $Enums.Language[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchesAsUser1?: MatchUncheckedUpdateManyWithoutUser1NestedInput
    matchesAsUser2?: MatchUncheckedUpdateManyWithoutUser2NestedInput
    historyAsUser1?: HistoryUncheckedUpdateManyWithoutUser1NestedInput
    historyAsUser2?: HistoryUncheckedUpdateManyWithoutUser2NestedInput
    roomsJoined?: RoomParticipantUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    aitranscripts?: AITranscriptUncheckedUpdateManyWithoutUserNestedInput
    sentFriends?: FriendshipUncheckedUpdateManyWithoutUserNestedInput
    receivedFriends?: FriendshipUncheckedUpdateManyWithoutFriendNestedInput
    userReported?: ReportUncheckedUpdateManyWithoutUserNestedInput
    reportedUser?: ReportUncheckedUpdateManyWithoutReportedUserNestedInput
    messagesenderperson?: MessageWithFreindsUncheckedUpdateManyWithoutSenderNestedInput
    messagereceiverperson?: MessageWithFreindsUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type RoomUpsertWithoutMessagesInput = {
    update: XOR<RoomUpdateWithoutMessagesInput, RoomUncheckedUpdateWithoutMessagesInput>
    create: XOR<RoomCreateWithoutMessagesInput, RoomUncheckedCreateWithoutMessagesInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutMessagesInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutMessagesInput, RoomUncheckedUpdateWithoutMessagesInput>
  }

  export type RoomUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    participants?: RoomParticipantUpdateManyWithoutRoomNestedInput
    aiEvents?: AITranscriptUpdateManyWithoutRoomNestedInput
    matches?: MatchUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    participants?: RoomParticipantUncheckedUpdateManyWithoutRoomNestedInput
    aiEvents?: AITranscriptUncheckedUpdateManyWithoutRoomNestedInput
    matches?: MatchUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type UserCreateWithoutMessagesenderpersonInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    gender: $Enums.Gender
    dob?: Date | string
    country?: string | null
    state?: string | null
    city?: string | null
    latitude?: number | null
    longitude?: number | null
    isPremium?: boolean
    interests?: UserCreateinterestsInput | $Enums.Interest[]
    preferredLang?: UserCreatepreferredLangInput | $Enums.Language[]
    createdAt?: Date | string
    updatedAt?: Date | string
    matchesAsUser1?: MatchCreateNestedManyWithoutUser1Input
    matchesAsUser2?: MatchCreateNestedManyWithoutUser2Input
    historyAsUser1?: HistoryCreateNestedManyWithoutUser1Input
    historyAsUser2?: HistoryCreateNestedManyWithoutUser2Input
    roomsJoined?: RoomParticipantCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    aitranscripts?: AITranscriptCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    sentFriends?: FriendshipCreateNestedManyWithoutUserInput
    receivedFriends?: FriendshipCreateNestedManyWithoutFriendInput
    userReported?: ReportCreateNestedManyWithoutUserInput
    reportedUser?: ReportCreateNestedManyWithoutReportedUserInput
    messagereceiverperson?: MessageWithFreindsCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutMessagesenderpersonInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    gender: $Enums.Gender
    dob?: Date | string
    country?: string | null
    state?: string | null
    city?: string | null
    latitude?: number | null
    longitude?: number | null
    isPremium?: boolean
    interests?: UserCreateinterestsInput | $Enums.Interest[]
    preferredLang?: UserCreatepreferredLangInput | $Enums.Language[]
    createdAt?: Date | string
    updatedAt?: Date | string
    matchesAsUser1?: MatchUncheckedCreateNestedManyWithoutUser1Input
    matchesAsUser2?: MatchUncheckedCreateNestedManyWithoutUser2Input
    historyAsUser1?: HistoryUncheckedCreateNestedManyWithoutUser1Input
    historyAsUser2?: HistoryUncheckedCreateNestedManyWithoutUser2Input
    roomsJoined?: RoomParticipantUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    aitranscripts?: AITranscriptUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    sentFriends?: FriendshipUncheckedCreateNestedManyWithoutUserInput
    receivedFriends?: FriendshipUncheckedCreateNestedManyWithoutFriendInput
    userReported?: ReportUncheckedCreateNestedManyWithoutUserInput
    reportedUser?: ReportUncheckedCreateNestedManyWithoutReportedUserInput
    messagereceiverperson?: MessageWithFreindsUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutMessagesenderpersonInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesenderpersonInput, UserUncheckedCreateWithoutMessagesenderpersonInput>
  }

  export type UserCreateWithoutMessagereceiverpersonInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    gender: $Enums.Gender
    dob?: Date | string
    country?: string | null
    state?: string | null
    city?: string | null
    latitude?: number | null
    longitude?: number | null
    isPremium?: boolean
    interests?: UserCreateinterestsInput | $Enums.Interest[]
    preferredLang?: UserCreatepreferredLangInput | $Enums.Language[]
    createdAt?: Date | string
    updatedAt?: Date | string
    matchesAsUser1?: MatchCreateNestedManyWithoutUser1Input
    matchesAsUser2?: MatchCreateNestedManyWithoutUser2Input
    historyAsUser1?: HistoryCreateNestedManyWithoutUser1Input
    historyAsUser2?: HistoryCreateNestedManyWithoutUser2Input
    roomsJoined?: RoomParticipantCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    aitranscripts?: AITranscriptCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    sentFriends?: FriendshipCreateNestedManyWithoutUserInput
    receivedFriends?: FriendshipCreateNestedManyWithoutFriendInput
    userReported?: ReportCreateNestedManyWithoutUserInput
    reportedUser?: ReportCreateNestedManyWithoutReportedUserInput
    messagesenderperson?: MessageWithFreindsCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutMessagereceiverpersonInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    gender: $Enums.Gender
    dob?: Date | string
    country?: string | null
    state?: string | null
    city?: string | null
    latitude?: number | null
    longitude?: number | null
    isPremium?: boolean
    interests?: UserCreateinterestsInput | $Enums.Interest[]
    preferredLang?: UserCreatepreferredLangInput | $Enums.Language[]
    createdAt?: Date | string
    updatedAt?: Date | string
    matchesAsUser1?: MatchUncheckedCreateNestedManyWithoutUser1Input
    matchesAsUser2?: MatchUncheckedCreateNestedManyWithoutUser2Input
    historyAsUser1?: HistoryUncheckedCreateNestedManyWithoutUser1Input
    historyAsUser2?: HistoryUncheckedCreateNestedManyWithoutUser2Input
    roomsJoined?: RoomParticipantUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    aitranscripts?: AITranscriptUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    sentFriends?: FriendshipUncheckedCreateNestedManyWithoutUserInput
    receivedFriends?: FriendshipUncheckedCreateNestedManyWithoutFriendInput
    userReported?: ReportUncheckedCreateNestedManyWithoutUserInput
    reportedUser?: ReportUncheckedCreateNestedManyWithoutReportedUserInput
    messagesenderperson?: MessageWithFreindsUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutMessagereceiverpersonInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagereceiverpersonInput, UserUncheckedCreateWithoutMessagereceiverpersonInput>
  }

  export type UserUpsertWithoutMessagesenderpersonInput = {
    update: XOR<UserUpdateWithoutMessagesenderpersonInput, UserUncheckedUpdateWithoutMessagesenderpersonInput>
    create: XOR<UserCreateWithoutMessagesenderpersonInput, UserUncheckedCreateWithoutMessagesenderpersonInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessagesenderpersonInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessagesenderpersonInput, UserUncheckedUpdateWithoutMessagesenderpersonInput>
  }

  export type UserUpdateWithoutMessagesenderpersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | $Enums.Interest[]
    preferredLang?: UserUpdatepreferredLangInput | $Enums.Language[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchesAsUser1?: MatchUpdateManyWithoutUser1NestedInput
    matchesAsUser2?: MatchUpdateManyWithoutUser2NestedInput
    historyAsUser1?: HistoryUpdateManyWithoutUser1NestedInput
    historyAsUser2?: HistoryUpdateManyWithoutUser2NestedInput
    roomsJoined?: RoomParticipantUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    aitranscripts?: AITranscriptUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    sentFriends?: FriendshipUpdateManyWithoutUserNestedInput
    receivedFriends?: FriendshipUpdateManyWithoutFriendNestedInput
    userReported?: ReportUpdateManyWithoutUserNestedInput
    reportedUser?: ReportUpdateManyWithoutReportedUserNestedInput
    messagereceiverperson?: MessageWithFreindsUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesenderpersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | $Enums.Interest[]
    preferredLang?: UserUpdatepreferredLangInput | $Enums.Language[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchesAsUser1?: MatchUncheckedUpdateManyWithoutUser1NestedInput
    matchesAsUser2?: MatchUncheckedUpdateManyWithoutUser2NestedInput
    historyAsUser1?: HistoryUncheckedUpdateManyWithoutUser1NestedInput
    historyAsUser2?: HistoryUncheckedUpdateManyWithoutUser2NestedInput
    roomsJoined?: RoomParticipantUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    aitranscripts?: AITranscriptUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    sentFriends?: FriendshipUncheckedUpdateManyWithoutUserNestedInput
    receivedFriends?: FriendshipUncheckedUpdateManyWithoutFriendNestedInput
    userReported?: ReportUncheckedUpdateManyWithoutUserNestedInput
    reportedUser?: ReportUncheckedUpdateManyWithoutReportedUserNestedInput
    messagereceiverperson?: MessageWithFreindsUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserUpsertWithoutMessagereceiverpersonInput = {
    update: XOR<UserUpdateWithoutMessagereceiverpersonInput, UserUncheckedUpdateWithoutMessagereceiverpersonInput>
    create: XOR<UserCreateWithoutMessagereceiverpersonInput, UserUncheckedCreateWithoutMessagereceiverpersonInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessagereceiverpersonInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessagereceiverpersonInput, UserUncheckedUpdateWithoutMessagereceiverpersonInput>
  }

  export type UserUpdateWithoutMessagereceiverpersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | $Enums.Interest[]
    preferredLang?: UserUpdatepreferredLangInput | $Enums.Language[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchesAsUser1?: MatchUpdateManyWithoutUser1NestedInput
    matchesAsUser2?: MatchUpdateManyWithoutUser2NestedInput
    historyAsUser1?: HistoryUpdateManyWithoutUser1NestedInput
    historyAsUser2?: HistoryUpdateManyWithoutUser2NestedInput
    roomsJoined?: RoomParticipantUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    aitranscripts?: AITranscriptUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    sentFriends?: FriendshipUpdateManyWithoutUserNestedInput
    receivedFriends?: FriendshipUpdateManyWithoutFriendNestedInput
    userReported?: ReportUpdateManyWithoutUserNestedInput
    reportedUser?: ReportUpdateManyWithoutReportedUserNestedInput
    messagesenderperson?: MessageWithFreindsUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagereceiverpersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | $Enums.Interest[]
    preferredLang?: UserUpdatepreferredLangInput | $Enums.Language[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchesAsUser1?: MatchUncheckedUpdateManyWithoutUser1NestedInput
    matchesAsUser2?: MatchUncheckedUpdateManyWithoutUser2NestedInput
    historyAsUser1?: HistoryUncheckedUpdateManyWithoutUser1NestedInput
    historyAsUser2?: HistoryUncheckedUpdateManyWithoutUser2NestedInput
    roomsJoined?: RoomParticipantUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    aitranscripts?: AITranscriptUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    sentFriends?: FriendshipUncheckedUpdateManyWithoutUserNestedInput
    receivedFriends?: FriendshipUncheckedUpdateManyWithoutFriendNestedInput
    userReported?: ReportUncheckedUpdateManyWithoutUserNestedInput
    reportedUser?: ReportUncheckedUpdateManyWithoutReportedUserNestedInput
    messagesenderperson?: MessageWithFreindsUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type RoomCreateWithoutAiEventsInput = {
    id?: string
    isActive?: boolean
    createdAt?: Date | string
    endedAt?: Date | string | null
    participants?: RoomParticipantCreateNestedManyWithoutRoomInput
    messages?: MessageCreateNestedManyWithoutRoomInput
    matches?: MatchCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutAiEventsInput = {
    id?: string
    isActive?: boolean
    createdAt?: Date | string
    endedAt?: Date | string | null
    participants?: RoomParticipantUncheckedCreateNestedManyWithoutRoomInput
    messages?: MessageUncheckedCreateNestedManyWithoutRoomInput
    matches?: MatchUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutAiEventsInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutAiEventsInput, RoomUncheckedCreateWithoutAiEventsInput>
  }

  export type UserCreateWithoutAitranscriptsInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    gender: $Enums.Gender
    dob?: Date | string
    country?: string | null
    state?: string | null
    city?: string | null
    latitude?: number | null
    longitude?: number | null
    isPremium?: boolean
    interests?: UserCreateinterestsInput | $Enums.Interest[]
    preferredLang?: UserCreatepreferredLangInput | $Enums.Language[]
    createdAt?: Date | string
    updatedAt?: Date | string
    matchesAsUser1?: MatchCreateNestedManyWithoutUser1Input
    matchesAsUser2?: MatchCreateNestedManyWithoutUser2Input
    historyAsUser1?: HistoryCreateNestedManyWithoutUser1Input
    historyAsUser2?: HistoryCreateNestedManyWithoutUser2Input
    roomsJoined?: RoomParticipantCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    sentFriends?: FriendshipCreateNestedManyWithoutUserInput
    receivedFriends?: FriendshipCreateNestedManyWithoutFriendInput
    userReported?: ReportCreateNestedManyWithoutUserInput
    reportedUser?: ReportCreateNestedManyWithoutReportedUserInput
    messagesenderperson?: MessageWithFreindsCreateNestedManyWithoutSenderInput
    messagereceiverperson?: MessageWithFreindsCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutAitranscriptsInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    gender: $Enums.Gender
    dob?: Date | string
    country?: string | null
    state?: string | null
    city?: string | null
    latitude?: number | null
    longitude?: number | null
    isPremium?: boolean
    interests?: UserCreateinterestsInput | $Enums.Interest[]
    preferredLang?: UserCreatepreferredLangInput | $Enums.Language[]
    createdAt?: Date | string
    updatedAt?: Date | string
    matchesAsUser1?: MatchUncheckedCreateNestedManyWithoutUser1Input
    matchesAsUser2?: MatchUncheckedCreateNestedManyWithoutUser2Input
    historyAsUser1?: HistoryUncheckedCreateNestedManyWithoutUser1Input
    historyAsUser2?: HistoryUncheckedCreateNestedManyWithoutUser2Input
    roomsJoined?: RoomParticipantUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    sentFriends?: FriendshipUncheckedCreateNestedManyWithoutUserInput
    receivedFriends?: FriendshipUncheckedCreateNestedManyWithoutFriendInput
    userReported?: ReportUncheckedCreateNestedManyWithoutUserInput
    reportedUser?: ReportUncheckedCreateNestedManyWithoutReportedUserInput
    messagesenderperson?: MessageWithFreindsUncheckedCreateNestedManyWithoutSenderInput
    messagereceiverperson?: MessageWithFreindsUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutAitranscriptsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAitranscriptsInput, UserUncheckedCreateWithoutAitranscriptsInput>
  }

  export type RoomUpsertWithoutAiEventsInput = {
    update: XOR<RoomUpdateWithoutAiEventsInput, RoomUncheckedUpdateWithoutAiEventsInput>
    create: XOR<RoomCreateWithoutAiEventsInput, RoomUncheckedCreateWithoutAiEventsInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutAiEventsInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutAiEventsInput, RoomUncheckedUpdateWithoutAiEventsInput>
  }

  export type RoomUpdateWithoutAiEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    participants?: RoomParticipantUpdateManyWithoutRoomNestedInput
    messages?: MessageUpdateManyWithoutRoomNestedInput
    matches?: MatchUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutAiEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    participants?: RoomParticipantUncheckedUpdateManyWithoutRoomNestedInput
    messages?: MessageUncheckedUpdateManyWithoutRoomNestedInput
    matches?: MatchUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type UserUpsertWithoutAitranscriptsInput = {
    update: XOR<UserUpdateWithoutAitranscriptsInput, UserUncheckedUpdateWithoutAitranscriptsInput>
    create: XOR<UserCreateWithoutAitranscriptsInput, UserUncheckedCreateWithoutAitranscriptsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAitranscriptsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAitranscriptsInput, UserUncheckedUpdateWithoutAitranscriptsInput>
  }

  export type UserUpdateWithoutAitranscriptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | $Enums.Interest[]
    preferredLang?: UserUpdatepreferredLangInput | $Enums.Language[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchesAsUser1?: MatchUpdateManyWithoutUser1NestedInput
    matchesAsUser2?: MatchUpdateManyWithoutUser2NestedInput
    historyAsUser1?: HistoryUpdateManyWithoutUser1NestedInput
    historyAsUser2?: HistoryUpdateManyWithoutUser2NestedInput
    roomsJoined?: RoomParticipantUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    sentFriends?: FriendshipUpdateManyWithoutUserNestedInput
    receivedFriends?: FriendshipUpdateManyWithoutFriendNestedInput
    userReported?: ReportUpdateManyWithoutUserNestedInput
    reportedUser?: ReportUpdateManyWithoutReportedUserNestedInput
    messagesenderperson?: MessageWithFreindsUpdateManyWithoutSenderNestedInput
    messagereceiverperson?: MessageWithFreindsUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutAitranscriptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | $Enums.Interest[]
    preferredLang?: UserUpdatepreferredLangInput | $Enums.Language[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchesAsUser1?: MatchUncheckedUpdateManyWithoutUser1NestedInput
    matchesAsUser2?: MatchUncheckedUpdateManyWithoutUser2NestedInput
    historyAsUser1?: HistoryUncheckedUpdateManyWithoutUser1NestedInput
    historyAsUser2?: HistoryUncheckedUpdateManyWithoutUser2NestedInput
    roomsJoined?: RoomParticipantUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    sentFriends?: FriendshipUncheckedUpdateManyWithoutUserNestedInput
    receivedFriends?: FriendshipUncheckedUpdateManyWithoutFriendNestedInput
    userReported?: ReportUncheckedUpdateManyWithoutUserNestedInput
    reportedUser?: ReportUncheckedUpdateManyWithoutReportedUserNestedInput
    messagesenderperson?: MessageWithFreindsUncheckedUpdateManyWithoutSenderNestedInput
    messagereceiverperson?: MessageWithFreindsUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserCreateWithoutSubscriptionsInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    gender: $Enums.Gender
    dob?: Date | string
    country?: string | null
    state?: string | null
    city?: string | null
    latitude?: number | null
    longitude?: number | null
    isPremium?: boolean
    interests?: UserCreateinterestsInput | $Enums.Interest[]
    preferredLang?: UserCreatepreferredLangInput | $Enums.Language[]
    createdAt?: Date | string
    updatedAt?: Date | string
    matchesAsUser1?: MatchCreateNestedManyWithoutUser1Input
    matchesAsUser2?: MatchCreateNestedManyWithoutUser2Input
    historyAsUser1?: HistoryCreateNestedManyWithoutUser1Input
    historyAsUser2?: HistoryCreateNestedManyWithoutUser2Input
    roomsJoined?: RoomParticipantCreateNestedManyWithoutUserInput
    aitranscripts?: AITranscriptCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    sentFriends?: FriendshipCreateNestedManyWithoutUserInput
    receivedFriends?: FriendshipCreateNestedManyWithoutFriendInput
    userReported?: ReportCreateNestedManyWithoutUserInput
    reportedUser?: ReportCreateNestedManyWithoutReportedUserInput
    messagesenderperson?: MessageWithFreindsCreateNestedManyWithoutSenderInput
    messagereceiverperson?: MessageWithFreindsCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutSubscriptionsInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    gender: $Enums.Gender
    dob?: Date | string
    country?: string | null
    state?: string | null
    city?: string | null
    latitude?: number | null
    longitude?: number | null
    isPremium?: boolean
    interests?: UserCreateinterestsInput | $Enums.Interest[]
    preferredLang?: UserCreatepreferredLangInput | $Enums.Language[]
    createdAt?: Date | string
    updatedAt?: Date | string
    matchesAsUser1?: MatchUncheckedCreateNestedManyWithoutUser1Input
    matchesAsUser2?: MatchUncheckedCreateNestedManyWithoutUser2Input
    historyAsUser1?: HistoryUncheckedCreateNestedManyWithoutUser1Input
    historyAsUser2?: HistoryUncheckedCreateNestedManyWithoutUser2Input
    roomsJoined?: RoomParticipantUncheckedCreateNestedManyWithoutUserInput
    aitranscripts?: AITranscriptUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    sentFriends?: FriendshipUncheckedCreateNestedManyWithoutUserInput
    receivedFriends?: FriendshipUncheckedCreateNestedManyWithoutFriendInput
    userReported?: ReportUncheckedCreateNestedManyWithoutUserInput
    reportedUser?: ReportUncheckedCreateNestedManyWithoutReportedUserInput
    messagesenderperson?: MessageWithFreindsUncheckedCreateNestedManyWithoutSenderInput
    messagereceiverperson?: MessageWithFreindsUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutSubscriptionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
  }

  export type UserUpsertWithoutSubscriptionsInput = {
    update: XOR<UserUpdateWithoutSubscriptionsInput, UserUncheckedUpdateWithoutSubscriptionsInput>
    create: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubscriptionsInput, UserUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type UserUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | $Enums.Interest[]
    preferredLang?: UserUpdatepreferredLangInput | $Enums.Language[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchesAsUser1?: MatchUpdateManyWithoutUser1NestedInput
    matchesAsUser2?: MatchUpdateManyWithoutUser2NestedInput
    historyAsUser1?: HistoryUpdateManyWithoutUser1NestedInput
    historyAsUser2?: HistoryUpdateManyWithoutUser2NestedInput
    roomsJoined?: RoomParticipantUpdateManyWithoutUserNestedInput
    aitranscripts?: AITranscriptUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    sentFriends?: FriendshipUpdateManyWithoutUserNestedInput
    receivedFriends?: FriendshipUpdateManyWithoutFriendNestedInput
    userReported?: ReportUpdateManyWithoutUserNestedInput
    reportedUser?: ReportUpdateManyWithoutReportedUserNestedInput
    messagesenderperson?: MessageWithFreindsUpdateManyWithoutSenderNestedInput
    messagereceiverperson?: MessageWithFreindsUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | $Enums.Interest[]
    preferredLang?: UserUpdatepreferredLangInput | $Enums.Language[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchesAsUser1?: MatchUncheckedUpdateManyWithoutUser1NestedInput
    matchesAsUser2?: MatchUncheckedUpdateManyWithoutUser2NestedInput
    historyAsUser1?: HistoryUncheckedUpdateManyWithoutUser1NestedInput
    historyAsUser2?: HistoryUncheckedUpdateManyWithoutUser2NestedInput
    roomsJoined?: RoomParticipantUncheckedUpdateManyWithoutUserNestedInput
    aitranscripts?: AITranscriptUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    sentFriends?: FriendshipUncheckedUpdateManyWithoutUserNestedInput
    receivedFriends?: FriendshipUncheckedUpdateManyWithoutFriendNestedInput
    userReported?: ReportUncheckedUpdateManyWithoutUserNestedInput
    reportedUser?: ReportUncheckedUpdateManyWithoutReportedUserNestedInput
    messagesenderperson?: MessageWithFreindsUncheckedUpdateManyWithoutSenderNestedInput
    messagereceiverperson?: MessageWithFreindsUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserCreateWithoutSentFriendsInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    gender: $Enums.Gender
    dob?: Date | string
    country?: string | null
    state?: string | null
    city?: string | null
    latitude?: number | null
    longitude?: number | null
    isPremium?: boolean
    interests?: UserCreateinterestsInput | $Enums.Interest[]
    preferredLang?: UserCreatepreferredLangInput | $Enums.Language[]
    createdAt?: Date | string
    updatedAt?: Date | string
    matchesAsUser1?: MatchCreateNestedManyWithoutUser1Input
    matchesAsUser2?: MatchCreateNestedManyWithoutUser2Input
    historyAsUser1?: HistoryCreateNestedManyWithoutUser1Input
    historyAsUser2?: HistoryCreateNestedManyWithoutUser2Input
    roomsJoined?: RoomParticipantCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    aitranscripts?: AITranscriptCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    receivedFriends?: FriendshipCreateNestedManyWithoutFriendInput
    userReported?: ReportCreateNestedManyWithoutUserInput
    reportedUser?: ReportCreateNestedManyWithoutReportedUserInput
    messagesenderperson?: MessageWithFreindsCreateNestedManyWithoutSenderInput
    messagereceiverperson?: MessageWithFreindsCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutSentFriendsInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    gender: $Enums.Gender
    dob?: Date | string
    country?: string | null
    state?: string | null
    city?: string | null
    latitude?: number | null
    longitude?: number | null
    isPremium?: boolean
    interests?: UserCreateinterestsInput | $Enums.Interest[]
    preferredLang?: UserCreatepreferredLangInput | $Enums.Language[]
    createdAt?: Date | string
    updatedAt?: Date | string
    matchesAsUser1?: MatchUncheckedCreateNestedManyWithoutUser1Input
    matchesAsUser2?: MatchUncheckedCreateNestedManyWithoutUser2Input
    historyAsUser1?: HistoryUncheckedCreateNestedManyWithoutUser1Input
    historyAsUser2?: HistoryUncheckedCreateNestedManyWithoutUser2Input
    roomsJoined?: RoomParticipantUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    aitranscripts?: AITranscriptUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedFriends?: FriendshipUncheckedCreateNestedManyWithoutFriendInput
    userReported?: ReportUncheckedCreateNestedManyWithoutUserInput
    reportedUser?: ReportUncheckedCreateNestedManyWithoutReportedUserInput
    messagesenderperson?: MessageWithFreindsUncheckedCreateNestedManyWithoutSenderInput
    messagereceiverperson?: MessageWithFreindsUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutSentFriendsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentFriendsInput, UserUncheckedCreateWithoutSentFriendsInput>
  }

  export type UserCreateWithoutReceivedFriendsInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    gender: $Enums.Gender
    dob?: Date | string
    country?: string | null
    state?: string | null
    city?: string | null
    latitude?: number | null
    longitude?: number | null
    isPremium?: boolean
    interests?: UserCreateinterestsInput | $Enums.Interest[]
    preferredLang?: UserCreatepreferredLangInput | $Enums.Language[]
    createdAt?: Date | string
    updatedAt?: Date | string
    matchesAsUser1?: MatchCreateNestedManyWithoutUser1Input
    matchesAsUser2?: MatchCreateNestedManyWithoutUser2Input
    historyAsUser1?: HistoryCreateNestedManyWithoutUser1Input
    historyAsUser2?: HistoryCreateNestedManyWithoutUser2Input
    roomsJoined?: RoomParticipantCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    aitranscripts?: AITranscriptCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    sentFriends?: FriendshipCreateNestedManyWithoutUserInput
    userReported?: ReportCreateNestedManyWithoutUserInput
    reportedUser?: ReportCreateNestedManyWithoutReportedUserInput
    messagesenderperson?: MessageWithFreindsCreateNestedManyWithoutSenderInput
    messagereceiverperson?: MessageWithFreindsCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutReceivedFriendsInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    gender: $Enums.Gender
    dob?: Date | string
    country?: string | null
    state?: string | null
    city?: string | null
    latitude?: number | null
    longitude?: number | null
    isPremium?: boolean
    interests?: UserCreateinterestsInput | $Enums.Interest[]
    preferredLang?: UserCreatepreferredLangInput | $Enums.Language[]
    createdAt?: Date | string
    updatedAt?: Date | string
    matchesAsUser1?: MatchUncheckedCreateNestedManyWithoutUser1Input
    matchesAsUser2?: MatchUncheckedCreateNestedManyWithoutUser2Input
    historyAsUser1?: HistoryUncheckedCreateNestedManyWithoutUser1Input
    historyAsUser2?: HistoryUncheckedCreateNestedManyWithoutUser2Input
    roomsJoined?: RoomParticipantUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    aitranscripts?: AITranscriptUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    sentFriends?: FriendshipUncheckedCreateNestedManyWithoutUserInput
    userReported?: ReportUncheckedCreateNestedManyWithoutUserInput
    reportedUser?: ReportUncheckedCreateNestedManyWithoutReportedUserInput
    messagesenderperson?: MessageWithFreindsUncheckedCreateNestedManyWithoutSenderInput
    messagereceiverperson?: MessageWithFreindsUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutReceivedFriendsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedFriendsInput, UserUncheckedCreateWithoutReceivedFriendsInput>
  }

  export type UserUpsertWithoutSentFriendsInput = {
    update: XOR<UserUpdateWithoutSentFriendsInput, UserUncheckedUpdateWithoutSentFriendsInput>
    create: XOR<UserCreateWithoutSentFriendsInput, UserUncheckedCreateWithoutSentFriendsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentFriendsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentFriendsInput, UserUncheckedUpdateWithoutSentFriendsInput>
  }

  export type UserUpdateWithoutSentFriendsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | $Enums.Interest[]
    preferredLang?: UserUpdatepreferredLangInput | $Enums.Language[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchesAsUser1?: MatchUpdateManyWithoutUser1NestedInput
    matchesAsUser2?: MatchUpdateManyWithoutUser2NestedInput
    historyAsUser1?: HistoryUpdateManyWithoutUser1NestedInput
    historyAsUser2?: HistoryUpdateManyWithoutUser2NestedInput
    roomsJoined?: RoomParticipantUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    aitranscripts?: AITranscriptUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    receivedFriends?: FriendshipUpdateManyWithoutFriendNestedInput
    userReported?: ReportUpdateManyWithoutUserNestedInput
    reportedUser?: ReportUpdateManyWithoutReportedUserNestedInput
    messagesenderperson?: MessageWithFreindsUpdateManyWithoutSenderNestedInput
    messagereceiverperson?: MessageWithFreindsUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutSentFriendsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | $Enums.Interest[]
    preferredLang?: UserUpdatepreferredLangInput | $Enums.Language[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchesAsUser1?: MatchUncheckedUpdateManyWithoutUser1NestedInput
    matchesAsUser2?: MatchUncheckedUpdateManyWithoutUser2NestedInput
    historyAsUser1?: HistoryUncheckedUpdateManyWithoutUser1NestedInput
    historyAsUser2?: HistoryUncheckedUpdateManyWithoutUser2NestedInput
    roomsJoined?: RoomParticipantUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    aitranscripts?: AITranscriptUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedFriends?: FriendshipUncheckedUpdateManyWithoutFriendNestedInput
    userReported?: ReportUncheckedUpdateManyWithoutUserNestedInput
    reportedUser?: ReportUncheckedUpdateManyWithoutReportedUserNestedInput
    messagesenderperson?: MessageWithFreindsUncheckedUpdateManyWithoutSenderNestedInput
    messagereceiverperson?: MessageWithFreindsUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserUpsertWithoutReceivedFriendsInput = {
    update: XOR<UserUpdateWithoutReceivedFriendsInput, UserUncheckedUpdateWithoutReceivedFriendsInput>
    create: XOR<UserCreateWithoutReceivedFriendsInput, UserUncheckedCreateWithoutReceivedFriendsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedFriendsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedFriendsInput, UserUncheckedUpdateWithoutReceivedFriendsInput>
  }

  export type UserUpdateWithoutReceivedFriendsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | $Enums.Interest[]
    preferredLang?: UserUpdatepreferredLangInput | $Enums.Language[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchesAsUser1?: MatchUpdateManyWithoutUser1NestedInput
    matchesAsUser2?: MatchUpdateManyWithoutUser2NestedInput
    historyAsUser1?: HistoryUpdateManyWithoutUser1NestedInput
    historyAsUser2?: HistoryUpdateManyWithoutUser2NestedInput
    roomsJoined?: RoomParticipantUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    aitranscripts?: AITranscriptUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    sentFriends?: FriendshipUpdateManyWithoutUserNestedInput
    userReported?: ReportUpdateManyWithoutUserNestedInput
    reportedUser?: ReportUpdateManyWithoutReportedUserNestedInput
    messagesenderperson?: MessageWithFreindsUpdateManyWithoutSenderNestedInput
    messagereceiverperson?: MessageWithFreindsUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedFriendsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | $Enums.Interest[]
    preferredLang?: UserUpdatepreferredLangInput | $Enums.Language[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchesAsUser1?: MatchUncheckedUpdateManyWithoutUser1NestedInput
    matchesAsUser2?: MatchUncheckedUpdateManyWithoutUser2NestedInput
    historyAsUser1?: HistoryUncheckedUpdateManyWithoutUser1NestedInput
    historyAsUser2?: HistoryUncheckedUpdateManyWithoutUser2NestedInput
    roomsJoined?: RoomParticipantUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    aitranscripts?: AITranscriptUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    sentFriends?: FriendshipUncheckedUpdateManyWithoutUserNestedInput
    userReported?: ReportUncheckedUpdateManyWithoutUserNestedInput
    reportedUser?: ReportUncheckedUpdateManyWithoutReportedUserNestedInput
    messagesenderperson?: MessageWithFreindsUncheckedUpdateManyWithoutSenderNestedInput
    messagereceiverperson?: MessageWithFreindsUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserCreateWithoutUserReportedInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    gender: $Enums.Gender
    dob?: Date | string
    country?: string | null
    state?: string | null
    city?: string | null
    latitude?: number | null
    longitude?: number | null
    isPremium?: boolean
    interests?: UserCreateinterestsInput | $Enums.Interest[]
    preferredLang?: UserCreatepreferredLangInput | $Enums.Language[]
    createdAt?: Date | string
    updatedAt?: Date | string
    matchesAsUser1?: MatchCreateNestedManyWithoutUser1Input
    matchesAsUser2?: MatchCreateNestedManyWithoutUser2Input
    historyAsUser1?: HistoryCreateNestedManyWithoutUser1Input
    historyAsUser2?: HistoryCreateNestedManyWithoutUser2Input
    roomsJoined?: RoomParticipantCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    aitranscripts?: AITranscriptCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    sentFriends?: FriendshipCreateNestedManyWithoutUserInput
    receivedFriends?: FriendshipCreateNestedManyWithoutFriendInput
    reportedUser?: ReportCreateNestedManyWithoutReportedUserInput
    messagesenderperson?: MessageWithFreindsCreateNestedManyWithoutSenderInput
    messagereceiverperson?: MessageWithFreindsCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutUserReportedInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    gender: $Enums.Gender
    dob?: Date | string
    country?: string | null
    state?: string | null
    city?: string | null
    latitude?: number | null
    longitude?: number | null
    isPremium?: boolean
    interests?: UserCreateinterestsInput | $Enums.Interest[]
    preferredLang?: UserCreatepreferredLangInput | $Enums.Language[]
    createdAt?: Date | string
    updatedAt?: Date | string
    matchesAsUser1?: MatchUncheckedCreateNestedManyWithoutUser1Input
    matchesAsUser2?: MatchUncheckedCreateNestedManyWithoutUser2Input
    historyAsUser1?: HistoryUncheckedCreateNestedManyWithoutUser1Input
    historyAsUser2?: HistoryUncheckedCreateNestedManyWithoutUser2Input
    roomsJoined?: RoomParticipantUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    aitranscripts?: AITranscriptUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    sentFriends?: FriendshipUncheckedCreateNestedManyWithoutUserInput
    receivedFriends?: FriendshipUncheckedCreateNestedManyWithoutFriendInput
    reportedUser?: ReportUncheckedCreateNestedManyWithoutReportedUserInput
    messagesenderperson?: MessageWithFreindsUncheckedCreateNestedManyWithoutSenderInput
    messagereceiverperson?: MessageWithFreindsUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutUserReportedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserReportedInput, UserUncheckedCreateWithoutUserReportedInput>
  }

  export type UserCreateWithoutReportedUserInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    gender: $Enums.Gender
    dob?: Date | string
    country?: string | null
    state?: string | null
    city?: string | null
    latitude?: number | null
    longitude?: number | null
    isPremium?: boolean
    interests?: UserCreateinterestsInput | $Enums.Interest[]
    preferredLang?: UserCreatepreferredLangInput | $Enums.Language[]
    createdAt?: Date | string
    updatedAt?: Date | string
    matchesAsUser1?: MatchCreateNestedManyWithoutUser1Input
    matchesAsUser2?: MatchCreateNestedManyWithoutUser2Input
    historyAsUser1?: HistoryCreateNestedManyWithoutUser1Input
    historyAsUser2?: HistoryCreateNestedManyWithoutUser2Input
    roomsJoined?: RoomParticipantCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    aitranscripts?: AITranscriptCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    sentFriends?: FriendshipCreateNestedManyWithoutUserInput
    receivedFriends?: FriendshipCreateNestedManyWithoutFriendInput
    userReported?: ReportCreateNestedManyWithoutUserInput
    messagesenderperson?: MessageWithFreindsCreateNestedManyWithoutSenderInput
    messagereceiverperson?: MessageWithFreindsCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutReportedUserInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    gender: $Enums.Gender
    dob?: Date | string
    country?: string | null
    state?: string | null
    city?: string | null
    latitude?: number | null
    longitude?: number | null
    isPremium?: boolean
    interests?: UserCreateinterestsInput | $Enums.Interest[]
    preferredLang?: UserCreatepreferredLangInput | $Enums.Language[]
    createdAt?: Date | string
    updatedAt?: Date | string
    matchesAsUser1?: MatchUncheckedCreateNestedManyWithoutUser1Input
    matchesAsUser2?: MatchUncheckedCreateNestedManyWithoutUser2Input
    historyAsUser1?: HistoryUncheckedCreateNestedManyWithoutUser1Input
    historyAsUser2?: HistoryUncheckedCreateNestedManyWithoutUser2Input
    roomsJoined?: RoomParticipantUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    aitranscripts?: AITranscriptUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    sentFriends?: FriendshipUncheckedCreateNestedManyWithoutUserInput
    receivedFriends?: FriendshipUncheckedCreateNestedManyWithoutFriendInput
    userReported?: ReportUncheckedCreateNestedManyWithoutUserInput
    messagesenderperson?: MessageWithFreindsUncheckedCreateNestedManyWithoutSenderInput
    messagereceiverperson?: MessageWithFreindsUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutReportedUserInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReportedUserInput, UserUncheckedCreateWithoutReportedUserInput>
  }

  export type UserUpsertWithoutUserReportedInput = {
    update: XOR<UserUpdateWithoutUserReportedInput, UserUncheckedUpdateWithoutUserReportedInput>
    create: XOR<UserCreateWithoutUserReportedInput, UserUncheckedCreateWithoutUserReportedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserReportedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserReportedInput, UserUncheckedUpdateWithoutUserReportedInput>
  }

  export type UserUpdateWithoutUserReportedInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | $Enums.Interest[]
    preferredLang?: UserUpdatepreferredLangInput | $Enums.Language[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchesAsUser1?: MatchUpdateManyWithoutUser1NestedInput
    matchesAsUser2?: MatchUpdateManyWithoutUser2NestedInput
    historyAsUser1?: HistoryUpdateManyWithoutUser1NestedInput
    historyAsUser2?: HistoryUpdateManyWithoutUser2NestedInput
    roomsJoined?: RoomParticipantUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    aitranscripts?: AITranscriptUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    sentFriends?: FriendshipUpdateManyWithoutUserNestedInput
    receivedFriends?: FriendshipUpdateManyWithoutFriendNestedInput
    reportedUser?: ReportUpdateManyWithoutReportedUserNestedInput
    messagesenderperson?: MessageWithFreindsUpdateManyWithoutSenderNestedInput
    messagereceiverperson?: MessageWithFreindsUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutUserReportedInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | $Enums.Interest[]
    preferredLang?: UserUpdatepreferredLangInput | $Enums.Language[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchesAsUser1?: MatchUncheckedUpdateManyWithoutUser1NestedInput
    matchesAsUser2?: MatchUncheckedUpdateManyWithoutUser2NestedInput
    historyAsUser1?: HistoryUncheckedUpdateManyWithoutUser1NestedInput
    historyAsUser2?: HistoryUncheckedUpdateManyWithoutUser2NestedInput
    roomsJoined?: RoomParticipantUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    aitranscripts?: AITranscriptUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    sentFriends?: FriendshipUncheckedUpdateManyWithoutUserNestedInput
    receivedFriends?: FriendshipUncheckedUpdateManyWithoutFriendNestedInput
    reportedUser?: ReportUncheckedUpdateManyWithoutReportedUserNestedInput
    messagesenderperson?: MessageWithFreindsUncheckedUpdateManyWithoutSenderNestedInput
    messagereceiverperson?: MessageWithFreindsUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserUpsertWithoutReportedUserInput = {
    update: XOR<UserUpdateWithoutReportedUserInput, UserUncheckedUpdateWithoutReportedUserInput>
    create: XOR<UserCreateWithoutReportedUserInput, UserUncheckedCreateWithoutReportedUserInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReportedUserInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReportedUserInput, UserUncheckedUpdateWithoutReportedUserInput>
  }

  export type UserUpdateWithoutReportedUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | $Enums.Interest[]
    preferredLang?: UserUpdatepreferredLangInput | $Enums.Language[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchesAsUser1?: MatchUpdateManyWithoutUser1NestedInput
    matchesAsUser2?: MatchUpdateManyWithoutUser2NestedInput
    historyAsUser1?: HistoryUpdateManyWithoutUser1NestedInput
    historyAsUser2?: HistoryUpdateManyWithoutUser2NestedInput
    roomsJoined?: RoomParticipantUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    aitranscripts?: AITranscriptUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    sentFriends?: FriendshipUpdateManyWithoutUserNestedInput
    receivedFriends?: FriendshipUpdateManyWithoutFriendNestedInput
    userReported?: ReportUpdateManyWithoutUserNestedInput
    messagesenderperson?: MessageWithFreindsUpdateManyWithoutSenderNestedInput
    messagereceiverperson?: MessageWithFreindsUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutReportedUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | $Enums.Interest[]
    preferredLang?: UserUpdatepreferredLangInput | $Enums.Language[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchesAsUser1?: MatchUncheckedUpdateManyWithoutUser1NestedInput
    matchesAsUser2?: MatchUncheckedUpdateManyWithoutUser2NestedInput
    historyAsUser1?: HistoryUncheckedUpdateManyWithoutUser1NestedInput
    historyAsUser2?: HistoryUncheckedUpdateManyWithoutUser2NestedInput
    roomsJoined?: RoomParticipantUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    aitranscripts?: AITranscriptUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    sentFriends?: FriendshipUncheckedUpdateManyWithoutUserNestedInput
    receivedFriends?: FriendshipUncheckedUpdateManyWithoutFriendNestedInput
    userReported?: ReportUncheckedUpdateManyWithoutUserNestedInput
    messagesenderperson?: MessageWithFreindsUncheckedUpdateManyWithoutSenderNestedInput
    messagereceiverperson?: MessageWithFreindsUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserCreateWithoutHistoryAsUser1Input = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    gender: $Enums.Gender
    dob?: Date | string
    country?: string | null
    state?: string | null
    city?: string | null
    latitude?: number | null
    longitude?: number | null
    isPremium?: boolean
    interests?: UserCreateinterestsInput | $Enums.Interest[]
    preferredLang?: UserCreatepreferredLangInput | $Enums.Language[]
    createdAt?: Date | string
    updatedAt?: Date | string
    matchesAsUser1?: MatchCreateNestedManyWithoutUser1Input
    matchesAsUser2?: MatchCreateNestedManyWithoutUser2Input
    historyAsUser2?: HistoryCreateNestedManyWithoutUser2Input
    roomsJoined?: RoomParticipantCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    aitranscripts?: AITranscriptCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    sentFriends?: FriendshipCreateNestedManyWithoutUserInput
    receivedFriends?: FriendshipCreateNestedManyWithoutFriendInput
    userReported?: ReportCreateNestedManyWithoutUserInput
    reportedUser?: ReportCreateNestedManyWithoutReportedUserInput
    messagesenderperson?: MessageWithFreindsCreateNestedManyWithoutSenderInput
    messagereceiverperson?: MessageWithFreindsCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutHistoryAsUser1Input = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    gender: $Enums.Gender
    dob?: Date | string
    country?: string | null
    state?: string | null
    city?: string | null
    latitude?: number | null
    longitude?: number | null
    isPremium?: boolean
    interests?: UserCreateinterestsInput | $Enums.Interest[]
    preferredLang?: UserCreatepreferredLangInput | $Enums.Language[]
    createdAt?: Date | string
    updatedAt?: Date | string
    matchesAsUser1?: MatchUncheckedCreateNestedManyWithoutUser1Input
    matchesAsUser2?: MatchUncheckedCreateNestedManyWithoutUser2Input
    historyAsUser2?: HistoryUncheckedCreateNestedManyWithoutUser2Input
    roomsJoined?: RoomParticipantUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    aitranscripts?: AITranscriptUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    sentFriends?: FriendshipUncheckedCreateNestedManyWithoutUserInput
    receivedFriends?: FriendshipUncheckedCreateNestedManyWithoutFriendInput
    userReported?: ReportUncheckedCreateNestedManyWithoutUserInput
    reportedUser?: ReportUncheckedCreateNestedManyWithoutReportedUserInput
    messagesenderperson?: MessageWithFreindsUncheckedCreateNestedManyWithoutSenderInput
    messagereceiverperson?: MessageWithFreindsUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutHistoryAsUser1Input = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHistoryAsUser1Input, UserUncheckedCreateWithoutHistoryAsUser1Input>
  }

  export type UserCreateWithoutHistoryAsUser2Input = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    gender: $Enums.Gender
    dob?: Date | string
    country?: string | null
    state?: string | null
    city?: string | null
    latitude?: number | null
    longitude?: number | null
    isPremium?: boolean
    interests?: UserCreateinterestsInput | $Enums.Interest[]
    preferredLang?: UserCreatepreferredLangInput | $Enums.Language[]
    createdAt?: Date | string
    updatedAt?: Date | string
    matchesAsUser1?: MatchCreateNestedManyWithoutUser1Input
    matchesAsUser2?: MatchCreateNestedManyWithoutUser2Input
    historyAsUser1?: HistoryCreateNestedManyWithoutUser1Input
    roomsJoined?: RoomParticipantCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    aitranscripts?: AITranscriptCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    sentFriends?: FriendshipCreateNestedManyWithoutUserInput
    receivedFriends?: FriendshipCreateNestedManyWithoutFriendInput
    userReported?: ReportCreateNestedManyWithoutUserInput
    reportedUser?: ReportCreateNestedManyWithoutReportedUserInput
    messagesenderperson?: MessageWithFreindsCreateNestedManyWithoutSenderInput
    messagereceiverperson?: MessageWithFreindsCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutHistoryAsUser2Input = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    gender: $Enums.Gender
    dob?: Date | string
    country?: string | null
    state?: string | null
    city?: string | null
    latitude?: number | null
    longitude?: number | null
    isPremium?: boolean
    interests?: UserCreateinterestsInput | $Enums.Interest[]
    preferredLang?: UserCreatepreferredLangInput | $Enums.Language[]
    createdAt?: Date | string
    updatedAt?: Date | string
    matchesAsUser1?: MatchUncheckedCreateNestedManyWithoutUser1Input
    matchesAsUser2?: MatchUncheckedCreateNestedManyWithoutUser2Input
    historyAsUser1?: HistoryUncheckedCreateNestedManyWithoutUser1Input
    roomsJoined?: RoomParticipantUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    aitranscripts?: AITranscriptUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    sentFriends?: FriendshipUncheckedCreateNestedManyWithoutUserInput
    receivedFriends?: FriendshipUncheckedCreateNestedManyWithoutFriendInput
    userReported?: ReportUncheckedCreateNestedManyWithoutUserInput
    reportedUser?: ReportUncheckedCreateNestedManyWithoutReportedUserInput
    messagesenderperson?: MessageWithFreindsUncheckedCreateNestedManyWithoutSenderInput
    messagereceiverperson?: MessageWithFreindsUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutHistoryAsUser2Input = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHistoryAsUser2Input, UserUncheckedCreateWithoutHistoryAsUser2Input>
  }

  export type UserUpsertWithoutHistoryAsUser1Input = {
    update: XOR<UserUpdateWithoutHistoryAsUser1Input, UserUncheckedUpdateWithoutHistoryAsUser1Input>
    create: XOR<UserCreateWithoutHistoryAsUser1Input, UserUncheckedCreateWithoutHistoryAsUser1Input>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHistoryAsUser1Input = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHistoryAsUser1Input, UserUncheckedUpdateWithoutHistoryAsUser1Input>
  }

  export type UserUpdateWithoutHistoryAsUser1Input = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | $Enums.Interest[]
    preferredLang?: UserUpdatepreferredLangInput | $Enums.Language[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchesAsUser1?: MatchUpdateManyWithoutUser1NestedInput
    matchesAsUser2?: MatchUpdateManyWithoutUser2NestedInput
    historyAsUser2?: HistoryUpdateManyWithoutUser2NestedInput
    roomsJoined?: RoomParticipantUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    aitranscripts?: AITranscriptUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    sentFriends?: FriendshipUpdateManyWithoutUserNestedInput
    receivedFriends?: FriendshipUpdateManyWithoutFriendNestedInput
    userReported?: ReportUpdateManyWithoutUserNestedInput
    reportedUser?: ReportUpdateManyWithoutReportedUserNestedInput
    messagesenderperson?: MessageWithFreindsUpdateManyWithoutSenderNestedInput
    messagereceiverperson?: MessageWithFreindsUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutHistoryAsUser1Input = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | $Enums.Interest[]
    preferredLang?: UserUpdatepreferredLangInput | $Enums.Language[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchesAsUser1?: MatchUncheckedUpdateManyWithoutUser1NestedInput
    matchesAsUser2?: MatchUncheckedUpdateManyWithoutUser2NestedInput
    historyAsUser2?: HistoryUncheckedUpdateManyWithoutUser2NestedInput
    roomsJoined?: RoomParticipantUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    aitranscripts?: AITranscriptUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    sentFriends?: FriendshipUncheckedUpdateManyWithoutUserNestedInput
    receivedFriends?: FriendshipUncheckedUpdateManyWithoutFriendNestedInput
    userReported?: ReportUncheckedUpdateManyWithoutUserNestedInput
    reportedUser?: ReportUncheckedUpdateManyWithoutReportedUserNestedInput
    messagesenderperson?: MessageWithFreindsUncheckedUpdateManyWithoutSenderNestedInput
    messagereceiverperson?: MessageWithFreindsUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserUpsertWithoutHistoryAsUser2Input = {
    update: XOR<UserUpdateWithoutHistoryAsUser2Input, UserUncheckedUpdateWithoutHistoryAsUser2Input>
    create: XOR<UserCreateWithoutHistoryAsUser2Input, UserUncheckedCreateWithoutHistoryAsUser2Input>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHistoryAsUser2Input = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHistoryAsUser2Input, UserUncheckedUpdateWithoutHistoryAsUser2Input>
  }

  export type UserUpdateWithoutHistoryAsUser2Input = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | $Enums.Interest[]
    preferredLang?: UserUpdatepreferredLangInput | $Enums.Language[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchesAsUser1?: MatchUpdateManyWithoutUser1NestedInput
    matchesAsUser2?: MatchUpdateManyWithoutUser2NestedInput
    historyAsUser1?: HistoryUpdateManyWithoutUser1NestedInput
    roomsJoined?: RoomParticipantUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    aitranscripts?: AITranscriptUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    sentFriends?: FriendshipUpdateManyWithoutUserNestedInput
    receivedFriends?: FriendshipUpdateManyWithoutFriendNestedInput
    userReported?: ReportUpdateManyWithoutUserNestedInput
    reportedUser?: ReportUpdateManyWithoutReportedUserNestedInput
    messagesenderperson?: MessageWithFreindsUpdateManyWithoutSenderNestedInput
    messagereceiverperson?: MessageWithFreindsUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutHistoryAsUser2Input = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | $Enums.Interest[]
    preferredLang?: UserUpdatepreferredLangInput | $Enums.Language[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchesAsUser1?: MatchUncheckedUpdateManyWithoutUser1NestedInput
    matchesAsUser2?: MatchUncheckedUpdateManyWithoutUser2NestedInput
    historyAsUser1?: HistoryUncheckedUpdateManyWithoutUser1NestedInput
    roomsJoined?: RoomParticipantUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    aitranscripts?: AITranscriptUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    sentFriends?: FriendshipUncheckedUpdateManyWithoutUserNestedInput
    receivedFriends?: FriendshipUncheckedUpdateManyWithoutFriendNestedInput
    userReported?: ReportUncheckedUpdateManyWithoutUserNestedInput
    reportedUser?: ReportUncheckedUpdateManyWithoutReportedUserNestedInput
    messagesenderperson?: MessageWithFreindsUncheckedUpdateManyWithoutSenderNestedInput
    messagereceiverperson?: MessageWithFreindsUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type MatchCreateManyUser1Input = {
    id?: string
    user2Id: string
    roomId?: string | null
    startedAt?: Date | string
    endedAt?: Date | string | null
  }

  export type MatchCreateManyUser2Input = {
    id?: string
    user1Id: string
    roomId?: string | null
    startedAt?: Date | string
    endedAt?: Date | string | null
  }

  export type HistoryCreateManyUser1Input = {
    id?: string
    user2Id: string
    roomId?: string | null
    startedAt?: Date | string
    endedAt?: Date | string | null
  }

  export type HistoryCreateManyUser2Input = {
    id?: string
    user1Id: string
    roomId?: string | null
    startedAt?: Date | string
    endedAt?: Date | string | null
  }

  export type RoomParticipantCreateManyUserInput = {
    id?: string
    roomId: string
    joinedAt?: Date | string
    leftAt?: Date | string | null
  }

  export type SubscriptionCreateManyUserInput = {
    id?: string
    plan: string
    startDate?: Date | string
    endDate: Date | string
    razorpayId?: string | null
    paymentStatus?: string
  }

  export type AITranscriptCreateManyUserInput = {
    id?: string
    roomId: string
    text: string
    lang: string
    isTranslated?: boolean
    translatedText?: string | null
    createdAt?: Date | string
  }

  export type MessageCreateManySenderInput = {
    id?: string
    content: string
    roomId: string
    createdAt?: Date | string
  }

  export type FriendshipCreateManyUserInput = {
    id?: string
    friendId: string
    createdAt?: Date | string
  }

  export type FriendshipCreateManyFriendInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type ReportCreateManyUserInput = {
    id?: string
    reportedId: string
    reason: string
    createdAt?: Date | string
  }

  export type ReportCreateManyReportedUserInput = {
    id?: string
    userId: string
    reason: string
    createdAt?: Date | string
  }

  export type MessageWithFreindsCreateManySenderInput = {
    id?: string
    content: string
    type?: $Enums.MessageType
    receiverId: string
    createdAt?: Date | string
  }

  export type MessageWithFreindsCreateManyReceiverInput = {
    id?: string
    content: string
    type?: $Enums.MessageType
    senderId: string
    createdAt?: Date | string
  }

  export type MatchUpdateWithoutUser1Input = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user2?: UserUpdateOneRequiredWithoutMatchesAsUser2NestedInput
    room?: RoomUpdateOneWithoutMatchesNestedInput
  }

  export type MatchUncheckedUpdateWithoutUser1Input = {
    id?: StringFieldUpdateOperationsInput | string
    user2Id?: StringFieldUpdateOperationsInput | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MatchUncheckedUpdateManyWithoutUser1Input = {
    id?: StringFieldUpdateOperationsInput | string
    user2Id?: StringFieldUpdateOperationsInput | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MatchUpdateWithoutUser2Input = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user1?: UserUpdateOneRequiredWithoutMatchesAsUser1NestedInput
    room?: RoomUpdateOneWithoutMatchesNestedInput
  }

  export type MatchUncheckedUpdateWithoutUser2Input = {
    id?: StringFieldUpdateOperationsInput | string
    user1Id?: StringFieldUpdateOperationsInput | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MatchUncheckedUpdateManyWithoutUser2Input = {
    id?: StringFieldUpdateOperationsInput | string
    user1Id?: StringFieldUpdateOperationsInput | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type HistoryUpdateWithoutUser1Input = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user2?: UserUpdateOneRequiredWithoutHistoryAsUser2NestedInput
  }

  export type HistoryUncheckedUpdateWithoutUser1Input = {
    id?: StringFieldUpdateOperationsInput | string
    user2Id?: StringFieldUpdateOperationsInput | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type HistoryUncheckedUpdateManyWithoutUser1Input = {
    id?: StringFieldUpdateOperationsInput | string
    user2Id?: StringFieldUpdateOperationsInput | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type HistoryUpdateWithoutUser2Input = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user1?: UserUpdateOneRequiredWithoutHistoryAsUser1NestedInput
  }

  export type HistoryUncheckedUpdateWithoutUser2Input = {
    id?: StringFieldUpdateOperationsInput | string
    user1Id?: StringFieldUpdateOperationsInput | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type HistoryUncheckedUpdateManyWithoutUser2Input = {
    id?: StringFieldUpdateOperationsInput | string
    user1Id?: StringFieldUpdateOperationsInput | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoomParticipantUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    room?: RoomUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type RoomParticipantUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoomParticipantUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SubscriptionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    razorpayId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: StringFieldUpdateOperationsInput | string
  }

  export type SubscriptionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    razorpayId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: StringFieldUpdateOperationsInput | string
  }

  export type SubscriptionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    razorpayId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: StringFieldUpdateOperationsInput | string
  }

  export type AITranscriptUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    isTranslated?: BoolFieldUpdateOperationsInput | boolean
    translatedText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutAiEventsNestedInput
  }

  export type AITranscriptUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    isTranslated?: BoolFieldUpdateOperationsInput | boolean
    translatedText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AITranscriptUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    isTranslated?: BoolFieldUpdateOperationsInput | boolean
    translatedText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    friend?: UserUpdateOneRequiredWithoutReceivedFriendsNestedInput
  }

  export type FriendshipUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    friendId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    friendId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipUpdateWithoutFriendInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSentFriendsNestedInput
  }

  export type FriendshipUncheckedUpdateWithoutFriendInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipUncheckedUpdateManyWithoutFriendInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reportedUser?: UserUpdateOneRequiredWithoutReportedUserNestedInput
  }

  export type ReportUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportedId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportedId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUpdateWithoutReportedUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserReportedNestedInput
  }

  export type ReportUncheckedUpdateWithoutReportedUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyWithoutReportedUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageWithFreindsUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiver?: UserUpdateOneRequiredWithoutMessagereceiverpersonNestedInput
  }

  export type MessageWithFreindsUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    receiverId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageWithFreindsUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    receiverId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageWithFreindsUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutMessagesenderpersonNestedInput
  }

  export type MessageWithFreindsUncheckedUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    senderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageWithFreindsUncheckedUpdateManyWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    senderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomParticipantCreateManyRoomInput = {
    id?: string
    userId: string
    joinedAt?: Date | string
    leftAt?: Date | string | null
  }

  export type MessageCreateManyRoomInput = {
    id?: string
    content: string
    senderId: string
    createdAt?: Date | string
  }

  export type AITranscriptCreateManyRoomInput = {
    id?: string
    userId: string
    text: string
    lang: string
    isTranslated?: boolean
    translatedText?: string | null
    createdAt?: Date | string
  }

  export type MatchCreateManyRoomInput = {
    id?: string
    user1Id: string
    user2Id: string
    startedAt?: Date | string
    endedAt?: Date | string | null
  }

  export type RoomParticipantUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutRoomsJoinedNestedInput
  }

  export type RoomParticipantUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoomParticipantUncheckedUpdateManyWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MessageUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AITranscriptUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    isTranslated?: BoolFieldUpdateOperationsInput | boolean
    translatedText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAitranscriptsNestedInput
  }

  export type AITranscriptUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    isTranslated?: BoolFieldUpdateOperationsInput | boolean
    translatedText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AITranscriptUncheckedUpdateManyWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    isTranslated?: BoolFieldUpdateOperationsInput | boolean
    translatedText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user1?: UserUpdateOneRequiredWithoutMatchesAsUser1NestedInput
    user2?: UserUpdateOneRequiredWithoutMatchesAsUser2NestedInput
  }

  export type MatchUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    user1Id?: StringFieldUpdateOperationsInput | string
    user2Id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MatchUncheckedUpdateManyWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    user1Id?: StringFieldUpdateOperationsInput | string
    user2Id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}