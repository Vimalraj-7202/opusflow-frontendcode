'use client'
import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Typography,
  Paper,
  IconButton,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Fade
} from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import DeleteIcon from '@mui/icons-material/Delete';
import DownloadIcon from '@mui/icons-material/Download';

const DocumentUpload = () => {
  const [files, setFiles] = useState<{ name: string; size: number; dataUrl: string }[]>([]);
  const [uploading, setUploading] = useState(false);

  // Load from session storage on mount
  useEffect(() => {
    const saved = sessionStorage.getItem('uploadedFiles');
    if (saved) {
      setFiles(JSON.parse(saved));
    }
  }, []);

  // Save to session storage on files change
  useEffect(() => {
    sessionStorage.setItem('uploadedFiles', JSON.stringify(files));
  }, [files]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setUploading(true);

      // Read files as DataURL for download later
      Promise.all(
        selectedFiles.map(file =>
          new Promise<{ name: string; size: number; dataUrl: string }>((resolve) => {
            const reader = new FileReader();
            reader.onload = () => {
              resolve({ name: file.name, size: file.size, dataUrl: reader.result as string });
            };
            reader.readAsDataURL(file);
          })
        )
      ).then(results => {
        setFiles(prev => [...prev, ...results]);
        setUploading(false);
      });
    }
  };

  const handleDelete = (fileName: string) => {
    setFiles(prev => prev.filter(f => f.name !== fileName));
  };

  return (
    <Box p={3}>
      {/* Upload Area */}
      <Paper
        sx={{
          p: 3,
          mb: 4,
          textAlign: 'center',
          border: '2px dashed #ccc',
          background: '#fafafa',
          transition: '0.3s',
          '&:hover': { borderColor: '#1976d2' }
        }}
      >
        <Typography variant="h6" gutterBottom>
          Upload Your Documents Here
        </Typography>
        <Button
          startIcon={<UploadFileIcon />}
          component="label"
          sx={{ mt: 2,borderRadius:'5px',backgroundColor:'#b248fb',color:'white',height:'30px',width:'auto',textTransform:'none'}}
        >
          Select Your Files
          <input hidden type="file" multiple onChange={handleFileChange} />
        </Button>
        {uploading && <LinearProgress sx={{ mt: 3 }} />}
      </Paper>

      {/* Uploaded Documents List */}
      <Paper sx={{ p: 3,borderRadius:'8px' }}>
        <Typography variant="h6" gutterBottom>
          Uploaded  Documents
        </Typography>
        {files.length === 0 ? (
          <Typography color="text.secondary">No documents uploaded yet.</Typography>
        ) : (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>File Name</TableCell>
                <TableCell>Size (KB)</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {files.map((file, index) => (
                <Fade in={true} timeout={500} key={file.name + index}>
                  <TableRow>
                    <TableCell>{file.name}</TableCell>
                    <TableCell>{(file.size / 1024).toFixed(2)}</TableCell>
                    <TableCell>
                      <IconButton
                        component="a"
                        href={file.dataUrl}
                        download={file.name}
                      >
                        <DownloadIcon />
                      </IconButton>
                      <IconButton color="error" onClick={() => handleDelete(file.name)}>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                </Fade>
              ))}
            </TableBody>
          </Table>
        )}
      </Paper>
    </Box>
  );
};

export default DocumentUpload;
