'use client'

// MUI imports
import { styled } from '@mui/material/styles'
import type { Theme } from '@mui/material/styles'

// Styled Components
const AppFullCalendar = styled('div')(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  '& .fc': {
    zIndex: 1,

    '.fc-col-header, .fc-daygrid-body, .fc-scrollgrid-sync-table, .fc-timegrid-body, .fc-timegrid-body table': {
      width: '100% !important'
    },

    // Toolbar
    '& .fc-toolbar': {
      flexWrap: 'wrap',
      flexDirection: 'row !important',
      '&.fc-header-toolbar': {
        marginBottom: theme.spacing(4.7)
      },
      '& .fc-sidebarToggle-button': {
        marginInlineEnd: theme.spacing(2)
      },
      '& .fc-button-group:has(.fc-next-button)': {
        marginInlineStart: theme.spacing(2)
      },
      '.fc-prev-button, & .fc-next-button': {
        display: 'flex',
        backgroundColor: 'transparent',
        border: '1px solid var(--mui-palette-divider)',
        borderRadius: 'var(--mui-shape-borderRadius) !important',
        '& .fc-icon': {
          color: 'var(--mui-palette-text-primary)',
          fontSize: '1.25rem'
        },
        '&:hover, &:active, &:focus': {
          boxShadow: 'none !important',
          backgroundColor: 'transparent !important'
        }
      },
      '& .fc-toolbar-chunk:first-of-type': {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
          '& div:first-of-type': {
            display: 'flex',
            alignItems: 'center'
          }
        }
      },
      '& .fc-button': {
        padding: theme.spacing(),
        '&:active, .&:focus': {
          boxShadow: 'none'
        }
      },
      '& .fc-button-group': {
        '& .fc-button': {
          textTransform: 'capitalize',
          '&:focus': {
            boxShadow: 'none'
          }
        },
        '& .fc-button-primary': {
          '&:not(.fc-prev-button):not(.fc-next-button)': {
            backgroundColor: 'transparent',
            padding: theme.spacing(1.5, 4),
            color: 'var(--mui-palette-text-primary)',
            borderColor: 'var(--mui-palette-divider)',
            '&.fc-button-active, &:hover': {
              color: 'var(--mui-palette-primary-main)',
              borderColor: 'var(--mui-palette-divider)',
              backgroundColor: 'var(--mui-palette-primary-lightOpacity)'
            }
          }
        },
        '& .fc-sidebarToggle-button': {
          border: 0,
          lineHeight: 0.8,
          borderColor: 'transparent',
          paddingBottom: '0 !important',
          backgroundColor: 'transparent',
          marginLeft: `${theme.spacing(-2)} !important`,
          padding: `${theme.spacing(1.275, 2)} !important`,
          '&:focus': {
            outline: 0,
            boxShadow: 'none'
          },
          '&:not(.fc-prev-button):not(.fc-next-button):hover': {
            backgroundColor: 'transparent !important'
          },
          '& + div': {
            marginLeft: 0
          }
        },
        '.fc-dayGridMonth-button, .fc-timeGridWeek-button, .fc-timeGridDay-button, & .fc-listMonth-button': {
          padding: theme.spacing(2.2, 6),

          '&:last-of-type, &:first-of-type': {
            borderRadius: theme.shape.borderRadius
          },
          '&:first-of-type': {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0
          },
          '&:last-of-type': {
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0
          }
        }
      },
      '& > * > :not(:first-of-type)': {
        marginLeft: 0
      },
      '& .fc-toolbar-title': {
        fontWeight: 600,
        marginInline: theme.spacing(4),
        fontSize: theme.typography.h6.fontSize
      },
      '.fc-button:empty:not(.fc-sidebarToggle-button), & .fc-toolbar-chunk:empty': {
        display: 'none'
      }
    },

    // Calendar head & body common
    '& tbody td, & thead th': {
      borderColor: 'var(--mui-palette-divider)',
      '&.fc-col-header-cell': {
        borderLeft: 0,
        borderRight: 0
      },
      '&[role="presentation"]': {
        borderRightWidth: 0
      }
    },
    '& colgroup col': {
      width: '60px !important'
    },

    // Event Colors
    '& .fc-event': {
      '&:not(.fc-list-event)': {
        '&.event-bg-primary': {
          borderColor: 'transparent',
          color: 'var(--mui-palette-primary-main)',

          // backgroundColor: bgColors.primaryLight.backgroundColor,
          backgroundColor: 'var(--mui-palette-primary-lightOpacity)',
          '& .fc-event-title, & .fc-event-time': {
            color: 'var(--mui-palette-primary-main)'
          }
        },
        '&.event-bg-success': {
          borderColor: 'transparent',
          color: 'var(--mui-palette-success-main)',

          // backgroundColor: bgColors.successLight.backgroundColor,
          backgroundColor: 'var(--mui-palette-success-lightOpacity)',
          '& .fc-event-title, & .fc-event-time': {
            color: 'var(--mui-palette-success-main)'
          }
        },
        '&.event-bg-error': {
          borderColor: 'transparent',
          color: 'var(--mui-palette-error-main)',

          // backgroundColor: bgColors.errorLight.backgroundColor,
          backgroundColor: 'var(--mui-palette-error-lightOpacity)',
          '& .fc-event-title, & .fc-event-time': {
            color: 'var(--mui-palette-error-main)'
          }
        },
        '&.event-bg-warning': {
          borderColor: 'transparent',
          color: 'var(--mui-palette-warning-main)',

          // backgroundColor: bgColors.warningLight.backgroundColor,
          backgroundColor: 'var(--mui-palette-warning-lightOpacity)',
          '& .fc-event-title, & .fc-event-time': {
            color: 'var(--mui-palette-warning-main)'
          }
        },
        '&.event-bg-info': {
          borderColor: 'transparent',
          color: 'var(--mui-palette-info-main)',

          // backgroundColor: bgColors.infoLight.backgroundColor,
          backgroundColor: 'var(--mui-palette-info-lightOpacity)',
          '& .fc-event-title, & .fc-event-time': {
            color: 'var(--mui-palette-info-main)'
          }
        }
      },
      '&.event-bg-primary': {
        '& .fc-list-event-dot': {
          borderColor: 'var(--mui-palette-primary-main)',
          backgroundColor: 'var(--mui-palette-primary-main)'
        },
        '&:hover td': {
          backgroundColor: 'var(--mui-palette-primary-lightOpacity)'
        }
      },
      '&.event-bg-success': {
        '& .fc-list-event-dot': {
          borderColor: 'var(--mui-palette-success-main)',
          backgroundColor: 'var(--mui-palette-success-main)'
        },
        '&:hover td': {
          backgroundColor: 'var(--mui-palette-success-lightOpacity)'
        }
      },
      '&.event-bg-error': {
        '& .fc-list-event-dot': {
          borderColor: 'var(--mui-palette-error-main)',
          backgroundColor: 'var(--mui-palette-error-main)'
        },
        '&:hover td': {
          backgroundColor: 'var(--mui-palette-error-lightOpacity)'
        }
      },
      '&.event-bg-warning': {
        '& .fc-list-event-dot': {
          borderColor: 'var(--mui-palette-warning-main)',
          backgroundColor: 'var(--mui-palette-warning-main)'
        },
        '&:hover td': {
          backgroundColor: 'var(--mui-palette-warning-lightOpacity)'
        }
      },
      '&.event-bg-info': {
        '& .fc-list-event-dot': {
          borderColor: 'var(--mui-palette-info-main)',
          backgroundColor: 'var(--mui-palette-info-main)'
        },
        '&:hover td': {
          backgroundColor: 'var(--mui-palette-info-lightOpacity)'
        }
      },
      '&.fc-daygrid-event': {
        marginLeft: '4px',
        marginRight: '4px'
      }
    },

    '& .fc-view-harness': {
      minHeight: '650px',
      margin: theme.spacing(0, -5.25),
      width: `calc(100% + ${theme.spacing(5.25 * 2)})`
    },

    // Calendar Head
    '& .fc-col-header': {
      '& .fc-col-header-cell': {
        fontSize: '.875rem',
        color: 'var(--mui-palette-text-primary)',
        '& .fc-col-header-cell-cushion': {
          padding: theme.spacing(2),
          textDecoration: 'none !important'
        }
      }
    },

    // Daygrid
    '& .fc-scrollgrid-section-liquid > td': {
      borderBottom: 0
    },
    '& .fc-daygrid-event-harness': {
      '& .fc-event': {
        fontWeight: 600,
        fontSize: '0.8rem',
        padding: theme.spacing(0, 1)
      },
      '&:not(:last-of-type)': {
        marginBottom: theme.spacing(1.2)
      }
    },
    '& .fc-daygrid-day-bottom': {
      marginTop: theme.spacing(1.2)
    },
    '& .fc-daygrid-day': {
      padding: '5px',
      '& .fc-daygrid-day-top': {
        flexDirection: 'row'
      }
    },
    '& .fc-scrollgrid': {
      borderColor: 'var(--mui-palette-divider)',
      borderInlineStart: 0
    },
    '& .fc-day-past, & .fc-day-future': {
      '&.fc-daygrid-day-number': {
        color: 'var(--mui-palette-text-disabled)'
      }
    },

    // All Views Event
    '& .fc-daygrid-day-number': {
      padding: theme.spacing(2, 4)
    },
    '& .fc-daygrid-day-number, & .fc-timegrid-slot-label-cushion, & .fc-list-event-time': {
      textDecoration: 'none !important',
      color: 'var(--mui-palette-text-primary) !important'
    },
    '& .fc-day-today:not(.fc-popover)': {
      backgroundColor: 'var(--mui-palette-action-hover)'
    },

    // WeekView
    '& .fc-timegrid': {
      '& .fc-scrollgrid-section': {
        '& .fc-col-header-cell, & .fc-timegrid-axis': {
          borderLeft: 0,
          borderRight: 0,
          background: 'transparent',
          borderColor: 'var(--mui-palette-divider)'
        },
        '& .fc-timegrid-axis': {
          borderColor: 'var(--mui-palette-divider)'
        },
        '& .fc-timegrid-axis-frame': {
          justifyContent: 'center',
          padding: theme.spacing(2),
          alignItems: 'flex-start'
        },
        '&:has(.fc-timegrid-divider)': {
          height: 0
        }
      },
      '& .fc-timegrid-axis': {
        '&.fc-scrollgrid-shrink': {
          '& .fc-timegrid-axis-cushion': {
            fontSize: '.75rem',
            textTransform: 'capitalize',
            color: 'var(--mui-palette-text-disabled)'
          }
        }
      },
      '& .fc-timegrid-slots': {
        '& .fc-timegrid-slot': {
          height: '3rem',
          borderColor: 'var(--mui-palette-divider)',
          '&.fc-timegrid-slot-label': {
            borderRight: 0
          },
          '&.fc-timegrid-slot-lane': {
            borderLeft: 0
          },
          '& .fc-timegrid-slot-label-frame': {
            textAlign: 'center',
            '& .fc-timegrid-slot-label-cushion': {
              fontSize: '.75rem',
              textTransform: 'uppercase'
            }
          }
        }
      },
      '& .fc-timegrid-divider': {
        display: 'none'
      },
      '& .fc-timegrid-event': {
        boxShadow: 'none'
      },
      '.fc-timegrid-col-events': {
        margin: 0
      }
    },
    '& .fc-timeGridWeek-view .fc-timegrid-slot-minor': {
      borderBlockStart: 0
    },

    // List View
    '& .fc-list': {
      border: 'none',
      '& th[colspan="3"]': {
        position: 'relative'
      },
      '& .fc-list-day-cushion': {
        background: 'transparent'
      },
      '.fc-list-event': {
        cursor: 'pointer',
        '&:hover': {
          '& td': {
            // backgroundColor: `rgba(${theme.palette.customColors.main}, 0.04)`
          }
        },
        '& td': {
          borderColor: 'var(--mui-palette-divider)'
        }
      },
      '& .fc-list-day': {
        backgroundColor: 'var(--mui-palette-action-hover)',

        '& .fc-list-day-text, & .fc-list-day-side-text': {
          fontSize: '.875rem',
          textDecoration: 'none'
        },

        '&  >  *': {
          background: 'none',
          borderColor: 'var(--mui-palette-divider)'
        }
      },
      '& .fc-list-event-title': {
        fontSize: '.875rem',
        color: 'var(--mui-palette-text-primary)'
      },
      '& .fc-list-event-time': {
        fontSize: '.875rem',
        color: 'var(--mui-palette-text-disabled)'
      },
      '.fc-list-table tbody > tr:first-child th': {
        borderTop: '1px solid var(--mui-palette-divider)'
      },
      '.fc-list-table': {
        borderBottom: '1px solid var(--mui-palette-divider)'
      }
    },

    // Popover
    '& .fc-popover': {
      zIndex: 20,
      '[data-skin="bordered"] &': {
        boxShadow: 'none'
      },
      boxShadow: 1,
      borderColor: 'var(--mui-palette-divider)',
      background: 'var(--mui-palette-background-paper)',
      '& .fc-popover-header': {
        padding: theme.spacing(2),
        background: 'var(--mui-palette-action-hover)',
        '& .fc-popover-title, & .fc-popover-close': {
          color: 'var(--mui-palette-text-primary)'
        }
      },
      '& .fc-popover-body': {
        '& *:not(.fc-event-main):not(:last-of-type)': {
          marginBottom: theme.spacing(1.2)
        }
      }
    },

    // Media Queries
    [theme.breakpoints.up('md')]: {
      '& .fc-sidebarToggle-button': {
        display: 'none'
      },
      '& .fc-toolbar-title': {
        marginLeft: 0
      }
    },
    '@media (max-width:610px)': {
      '& .fc-header-toolbar .fc-toolbar-chunk:last-of-type': {
        marginTop: theme.spacing(4)
      }
    }
  }
}))

export default AppFullCalendar
