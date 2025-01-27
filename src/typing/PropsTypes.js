/**
 * @typedef {import('@react-navigation/native').ParamListBase & {
 *   ArtistDetailScreen: {
 *     id: string;
 *   };
 *   ArtistListScreen: undefined;
 *   PlayerScreen: {
 *     index: number;
 *   };
 *   TrackListScreen: undefined;
 * }} RootStackParamList
 */

/**
 * @template {keyof RootStackParamList} Screen
 * @typedef {import('@react-navigation/native-stack').NativeStackScreenProps<RootStackParamList, Screen>} RootScreenProps
 */

/**
 * @template T
 * @typedef {Object} CardBaseProps
 * @property {T} item
 * @property {number} index
 * @property {number} [listLength]
 * @property {((event: import('react-native').GestureResponderEvent) => void)} [onPress]
 */
