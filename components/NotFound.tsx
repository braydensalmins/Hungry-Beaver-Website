import React from 'react';
import { Link } from 'react-router-dom';
import { TreePine } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-24">
      <TreePine size={64} className="text-beaver-orange mb-6" />
      <h1 className="text-6xl font-display font-bold text-beaver-dark mb-4">404</h1>
      <p className="text-xl text-gray-500 mb-8 max-w-md">
        Looks like this page got ground down. Let's get you back to solid ground.
      </p>
      <Link
        to="/"
        className="bg-beaver-orange text-beaver-dark font-display font-bold px-8 py-3 uppercase tracking-wide hover:bg-orange-600 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
};
