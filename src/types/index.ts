/**
 * Тип для описания взаимно исключающих полей:
 * либо используется `customBar`, либо `classNameBar`, но не оба одновременно.
 */
type CustomBar =
    | {
          /**
           * Кастомный элемент для отображения в качестве бара.
           * @type {React.ReactNode}
           */
          customBar?: React.ReactNode;

          /**
           * Если `customBar` используется, `classNameBar` не может быть установлен.
           * @type {never}
           */
          classNameBar?: never;
      }
    | {
          /**
           * Если `classNameBar` используется, `customBar` не может быть установлен.
           * @type {never}
           */
          customBar?: never;

          /**
           * CSS-класс для кастомизации бара.
           * @type {string}
           */
          classNameBar?: string;
      };

export type ModalBottomSheetProps = {
    visible: boolean;
    children: React.ReactNode;
    transition?: number;
    maxHeight?: number;
    minHeight?: number;
    classNameModalContainer?: string;
    classNameBarContainer?: string;
    propagateSwipe?: boolean;
    onModalHide?: () => void;
    onModalShow?: () => void;
    onMoveStart?: (event: React.TouchEvent | React.MouseEvent) => void;
    onMoveEnd?: (event: React.TouchEvent | React.MouseEvent) => void;
    onSwipeComplete?: (event: React.TouchEvent | React.MouseEvent) => void;
    onSwipeCancel?: (event: React.TouchEvent | React.MouseEvent) => void;
    onBackdropClick?: () => void;
} & CustomBar;
