type ReactFC<P = never> = React.FunctionComponent<React.PropsWithChildren<P>>;
type ReactFCNoChildren<P = never> = React.FunctionComponent<P>;
type ReactFCRef<P = never> = React.FunctionComponent<React.PropsWithRef<P>>;
