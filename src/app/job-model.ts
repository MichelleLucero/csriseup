export interface Company {
  company: string;
  id: string;
}

export interface Position {
  position: string;
  id: string;
}

export interface Status {
  status: string;
  id: string;
}

export interface Job {
  id: string;
  company: { [key: string]: Company };
  jobLink: string;
  lastUpdated: string;
  open: boolean;
  position: { [key: string]: Position };
  status: {
    [key: string]: Status;
  };
}
