
"use client"
import React, { useState } from 'react';
import { Box, Button, TextField, IconButton, Typography, Avatar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';

const LiveChatWidget = () => {
  const [message, setMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    if (message.trim()) {
      // TODO: Implement send message logic
      console.log('Send message:', message);
      setMessage('');
    }
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        zIndex: 1300,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
      }}
    >
      {/* Chat Box */}
      {isOpen && (
        <Box
          sx={{
            width: 320,
            mb: 1, // margin-bottom to space it above the avatar
            bgcolor: 'background.paper',
            boxShadow: 6,
            borderRadius: 2,
            p: 2,
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
            <Typography variant="subtitle1">Support</Typography>
            <IconButton size="small" onClick={() => setIsOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Typography variant="body2" gutterBottom>
            Welcome back! Let us know if you have any questions.
          </Typography>

          <Box
            component="form"
            onSubmit={handleSend}
            sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}
          >
            <TextField
              fullWidth
              size="small"
              placeholder="Write a message…"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <IconButton
              type="submit"
              color="primary"
              disabled={!message.trim()}
              aria-label="Send message"
            >
              <SendIcon />
            </IconButton>
          </Box>
        </Box>
      )}

      {/* Chat Trigger Button (Round Avatar) */}
      <IconButton
        onClick={() => setIsOpen(true)}
        aria-label="Open LiveChat chat widget"
        sx={{
          p: 0,
          width: 56,
          height: 56,
          borderRadius: '50%',
          background: 'transparent',
          boxShadow: 3,
          '&:hover': {
            background: 'rgba(0,0,0,0.05)',
          },
        }}
      >
        <Avatar
          alt="Agent Avatar"
          src="/images/468ac40f3cb1fcb5474e8939dba6aba6.png"
          sx={{ width: 56, height: 56 }}
        />
      </IconButton>
    </Box>
  );
};

export default LiveChatWidget;
