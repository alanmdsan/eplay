import { ButtonContainer, ButtonLink } from './styles'

export type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
  variant?: 'primary' | 'secondary'
}

const Button = ({
  type,
  title,
  to,
  onClick,
  children,
  variant = 'primary'
}: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer
        type="button"
        title={title}
        variant={variant}
        onClick={onClick}
      >
        {children}
      </ButtonContainer>
    )
  } else {
    return <ButtonLink to={to as string}>{children}</ButtonLink>
  }
}

export default Button
