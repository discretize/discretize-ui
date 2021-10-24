import React, { ReactElement } from 'react'

import withLoading from '../withLoading/withLoading'
import IconWithText from '../IconWithText/IconWithText'
import WikiLink from '../WikiLink/WikiLink'
import { useColorModeHighlightSuffix } from '../helpers'

export interface SpecializationProps {
  id: number
  component: object
  data: object
  disableIcon: boolean
  disableText: boolean
  disableLink: boolean
  inline: boolean
  wikiLinkProps: object
}

const Specialization = ({
  id,
  component,
  data,
  disableIcon,
  disableText,
  disableLink,
  inline,
  wikiLinkProps,
}: SpecializationProps): ReactElement => {
  const highlightSuffix = useColorModeHighlightSuffix()

  const { name, icon, profession } = data

  return (
    <IconWithText
      component={component}
      icon={icon}
      text={
        disableLink ? (
          name
        ) : (
          <WikiLink
            to={name}
            {...wikiLinkProps}
            sx={{
              color: 'inherit',
              '&:hover': {
                color: `gw2.profession.${profession.toLowerCase()}${highlightSuffix}`,
              },
              ...wikiLinkProps?.sx,
            }}
          />
        )
      }
      disableIcon={disableIcon}
      disableText={disableText}
      inline={inline}
      {...rest}
      iconProps={{ hexagon: true, ...rest.iconProps }}
      sx={{
        color: `gw2.profession.${profession.toLowerCase()}`,
        ...rest.sx,
      }}
      ref={ref}
    />
  )
}

export default withLoading()(Specialization)
